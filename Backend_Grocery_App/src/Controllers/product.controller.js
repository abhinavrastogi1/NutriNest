import { json } from "express";
import { Category } from "../Models/category.models.js";
import { Product } from "../Models/product.models.js";

import ApiError from "../Utils/ApiError.js";
import ApiResponse from "../Utils/ApiResponse.js";
import asyncHandler from "../Utils/asyncHandler.js";
import uploadCloudinary from "../Utils/cloudinary.js";

const listProduct = asyncHandler(async (req, res) => {
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
  } = req.body;

  // Validate product fields
  if (
    [productName, description, categoryName, brand, quantity].some(
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
  let parsedOriginalPrice, parsedDiscount, parsedDiscountedPrice;
  try {
    parsedOriginalPrice = JSON.parse(originalPriceWithWeight);
    parsedDiscount = JSON.parse(discount);
    parsedDiscountedPrice = JSON.parse(discountedPriceWithWeight);
  } catch (err) {
    throw new ApiError(400, "Invalid format for price or discount fields");
  }

  // Check if category exists or create a new one
  let category = await Category.findOne({ categoryName });
  if (!category) {
    category = await Category.create({ categoryName });
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
  });

  if (!product) {
    throw new ApiError(501, "Product creation failed due to an unknown error");
  }

  // Respond with success
  res
    .status(200)
    .json(new ApiResponse(200, product, "Product successfully added"));
});

export { listProduct };
