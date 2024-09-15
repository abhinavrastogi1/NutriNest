import ApiError from "../Utils/ApiError.js";
import ApiResponse from "../Utils/ApiResponse.js";
import asyncHandler from "../Utils/asyncHandler.js";
import uploadCloudinary from "../Utils/cloudinary.js";

const listProduct = asyncHandler(async (req, res) => {
  // extractig images from multer
  const images = req?.files;
  if (!images) {
    throw new ApiError(402, "Images are required");
  }
  const imagesPath = [];
  req?.files.map((imagefile) => {
    const path = imagefile?.path;
    imagesPath.push(path);
  });
  // uploading images on cloudinary
  //const CloudinaryUrl = await uploadCloudinary(imagesPath[0])
  const CloudinaryUrl = await Promise.all(
    imagesPath.map(async (imagePath) => {
      // map with async operation provide an array
      const imageurl = await uploadCloudinary(imagePath);
      return imageurl.url;
    })
  );
  if (CloudinaryUrl.length === 0) {
    throw new ApiError(401, "Images not uploaded  please try again");
  }

  res.status(201).json(new ApiResponse(201, "Hello", "hello"));
});

export { listProduct };
