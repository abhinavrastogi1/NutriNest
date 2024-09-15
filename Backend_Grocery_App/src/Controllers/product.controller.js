import { Category } from "../Models/category.models.js";
import { Product } from "../Models/product.models.js";
import { Seller } from "../Models/seller.models.js";
import ApiError from "../Utils/ApiError.js";
import ApiResponse from "../Utils/ApiResponse.js";
import asyncHandler from "../Utils/asyncHandler.js";
import uploadCloudinary from "../Utils/cloudinary.js";

const listProduct = asyncHandler(async (req, res) => {
  /* get images from local storage 
upload them to cloudinary
get sellers role
get category of the product make create an new product
*/
  // extractig images from multer
  const localImages = req?.files;
  if (!localImages) {
    throw new ApiError(402, "Images are required");
  }
  const imagesPath = [];
  localImages.map((imagefile) => {
    const path = imagefile?.path;
    imagesPath.push(path);
  });
  // uploading images on cloudinary
  //const CloudinaryUrl = await uploadCloudinary(imagesPath[0])
  const CloudinaryUrl = await Promise.all(
    imagesPath.map(async (imagePath) => {
      const imageurl = await uploadCloudinary(imagePath);
      return imageurl.url;
    })
  );
  if (CloudinaryUrl.length === 0) {
    throw new ApiError(401, "Images not uploaded  please try again");
  }
  //  product essentials
  //,description,categoryName,brand,storeName,originalPriceWithWeight,discount,discountedPriceWithWeight
  console.log(req.body);
  const {
    productName,
    description,
    categoryName,
    brand,
    storeName,
    originalPriceWithWeight,
    discount,
    discountedPriceWithWeight,
  } = req.body;
  if (
    [productName, description, categoryName, brand, storeName].some(
      (field) => typeof field === "string" && field.trim() === ""
    ) ||
    [originalPriceWithWeight, discount, discountedPriceWithWeight].some(
      (field) => field == null
    ) // Handle non-string fields
  ) {
    throw new ApiError(404, "All the fields are required");
  }
  // check it the category exist or not
  const category = await Category.findOne({ categoryName: categoryName });
  if (!category) {
    category = await Category.create({
      categoryName: categoryName,
    });
  }
  const seller = await Seller.findOne({ storeName: storeName });
  if (seller == null) {
    throw new ApiError(403, "unauthorize request");
  }
  // new product
  const product = await Product.create({
    productName,
    description,
    category: category?._id,
    brand,
    seller: seller?._id,
    originalPriceWithWeight,
    discount,
    discountedPriceWithWeight,
    images: CloudinaryUrl,
  });
  if (!product) {
    throw new ApiError(501, "something went wrong while creating product");
  }
  res
    .status(200)
    .json(new ApiResponse(200, product, "product successfully added "));
});

export { listProduct };
