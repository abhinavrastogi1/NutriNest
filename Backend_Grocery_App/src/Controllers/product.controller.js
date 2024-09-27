import { json } from "express";
import { Category } from "../Models/category.models.js";
import { Product } from "../Models/product.models.js";

import ApiError from "../Utils/ApiError.js";
import ApiResponse from "../Utils/ApiResponse.js";
import asyncHandler from "../Utils/asyncHandler.js";
import uploadCloudinary from "../Utils/cloudinary.js";

const listProduct = asyncHandler(async (req, res) => {
  // Extract product details from req.body
  const {
    productName,
    description,
    categoryName,
    brand,
    id,
    originalPriceWithWeight,
    discount,
    discountedPriceWithWeight,
    quantity,
    packSizes,
  } = req.body;

  // Validate product fields
  if (
    [productName, description, categoryName, brand].some(
      (field) => typeof field === "string" && field.trim() === ""
    ) ||
    [originalPriceWithWeight, discount, discountedPriceWithWeight, id].some(
      (field) => field == null || field === ""
    ) ||
    isNaN(id)
  ) {
    throw new ApiError(404, "All fields are required and must be valid");
  }

  // Parse price fields
  let parsedOriginalPrice,
    parsedDiscount,
    parsedDiscountedPrice,
    parsedPackSizes;
  try {
    parsedOriginalPrice = JSON.parse(originalPriceWithWeight);
    parsedDiscount = JSON.parse(discount);
    parsedDiscountedPrice = JSON.parse(discountedPriceWithWeight);
    parsedPackSizes = JSON.parse(packSizes);
  } catch (err) {
    throw new ApiError(400, "Invalid format ");
  }

  // Check if category exists or create a new one
  let category = await Category.findOne({ categoryName });
  if (!category) {
    category = await Category.create({ categoryName });
  }

  // Extract images from multer
  const localImages = req?.files || [];
  if (localImages.length === 0) {
    throw new ApiError(402, "Images are required");
  }

  // Get image paths
  const imagesPath = localImages.map((imagefile) => imagefile.path);

  // Upload images to Cloudinary
  const cloudinaryUrls = await Promise.all(
    imagesPath.map(async (imagePath) => {
      try {
        const imageurl = await uploadCloudinary(imagePath);
        return imageurl.url;
      } catch (err) {
        throw new ApiError(500, "Image upload failed");
      }
    })
  );

  if (cloudinaryUrls.length === 0) {
    throw new ApiError(400, "Images not uploaded. Please try again");
  }

  // Create new product
  const product = await Product.create({
    productName,
    id,
    description,
    category: category?._id,
    brand,
    originalPriceWithWeight: parsedOriginalPrice,
    discount: parsedDiscount,
    discountedPriceWithWeight: parsedDiscountedPrice,
    images: cloudinaryUrls,
    quantity,
    packSizes: parsedPackSizes,
  });

  if (!product) {
    throw new ApiError(501, "Product creation failed due to an unknown error");
  }

  // Respond with success
  res
    .status(200)
    .json(new ApiResponse(200, product, "Product successfully added"));
});

// This controller was made just to change the category  schema
// const updatecategory=asyncHandler(async(req,res)=>{
//   console.log(req.body)
//   const data=JSON.parse(req.body.category)
//   if (data) {
//     const { level1, level2, level3 } = data;
//     console.log(level1, level2, level3); // Should log the values correctly
//   } else {
//     console.log('Category data is not available.');
//     throw new ApiError(401,"problem while accessing levels")
//   }
// const categorydata=await Category.create({
//  category:data
// })
// console.log(categorydata)

// })

// Controller function to send category data

const categorytree = asyncHandler(async (req, res) => {
  const categoryData = await Category.aggregate([
    {
      $sort: {
        "category.level1": 1,
        "category.level2": 1,
        "category.level3": 1,
      },
    },
    {
      $group: {
        _id: {
          level1: "$category.level1",
          level2: "$category.level2",
        },
        level3: {
          $push: {
            level3: "$category.level3",
          },
        },
      },
    },
    {
      $sort: {
        level3: 1,
      },
    },
    {
      $group: {
        _id: "$_id.level1",
        subCategory: {
          $push: {
            level2: "$_id.level2",
            subSubCategory: "$level3",
          },
        },
      },
    },
    {
      $sort: {
        level2: 1,
      },
    },
    {
      $addFields: {
        mainCategory: "$_id",
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
    {
      $project: {
        mainCategory: 1,
        subCategory: 1,
        _id: 0,
      },
    },
  ]);

  if (!categoryData) {
    throw new ApiError(401, "Data cannot be fetched");
  }

  res
    .status(201)
    .json(new ApiResponse(201, categoryData, "list of product category"));
});
const recomemdedProduct = asyncHandler(async (req, res) => {
  const recomendedProductData = await Product.aggregate([
    {
      $sort: {
        id: 1,
      },
    },
    {
      $group: {
        _id: "$category",
        productdata: {
          $push: "$$ROOT",
        },
      },
    },
    {
      $unwind: "$productdata",
    },
    {
      $lookup: {
        from: "categories",
        localField: "productdata.category",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $unwind: "$category",
    },
    {
      $addFields: {
        category: {
          level1: "$category.category.level1",
          level2: "$category.category.level2",
          level3: "$category.category.level3",
        },
      },
    },
    {
      $project: {
        "category.level1": 1,
        "category.level2": 1,
        "category.level3": 1,
        productdata: 1,
      },
    },
    {
      $project: {
        "productdata.createdAt": 0,
        "productdata.updatedAt": 0,
        "productdata.__v": 0,
      },
    },
    {
      $addFields: {
        images: {
          $slice: ["$productdata.images", 1],
        },
      },
    },
    {
      $group: {
        _id: "$_id",
        productdata: {
          $push: {
            _id: "$productdata._id",
            productName: "$productdata.productName",
            productId: "$productdata.id",
            images: "$images",
            description: "$productdata.description",
            brand: "$productdata.brand",
            originalPriceWithWeight: "$productdata.originalPriceWithWeight",
            discount: "$productdata.discount",
            discountedPriceWithWeight: "$productdata.discountedPriceWithWeight",
            quantity: "$productdata.quantity",
            categoryDetails: "$category",
            categoryId: "$productdata.category",
            imageAlt: "$productdata.productName",
          },
        },
        count: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        "productdata.productId": 1,
      },
    },
    {
      $addFields: {
        productData: {
          $slice: ["$productdata", 2],
        },
      },
    },
    {
      $project: {
        productdata: 0,
        _id: 0,
        count: 0,
      },
    },
    {
      $limit: 10,
    },
  ]);
  if (!recomendedProductData) {
    throw new ApiError(501, "something went wrong while fetching product data");
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, recomendedProductData, "data fetched successfully")
    );
});

export { listProduct, categorytree, recomemdedProduct };
