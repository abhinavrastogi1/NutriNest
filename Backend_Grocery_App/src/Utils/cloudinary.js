import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload an image
const uploadCloudinary = async (localFilespath) => {
  try {
    if (!localFilespath) return null;
    const response = await cloudinary.uploader.upload(localFilespath, {
      resource_type: "auto", //file uploaded
      secure: true,
    });
    fs.unlink(localFilespath, (error) => {
      if (error) {
        console.log("error occur while deleting localy stored files ", error);
      }
    }); //removes localy saved files
    return response;
  } catch (error) {
    fs.unlink(localFilespath, (error) => {
      if (error) {
        console.log("error occur while 1 deleting localy stored files ", error);
      }
    }); //remove localy saved files
    return null;
  }
};
export default uploadCloudinary;
