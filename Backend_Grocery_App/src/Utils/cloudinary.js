import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

// Upload an image
const uploadCloudinary = async (localFilespath) => {
  try {
    if (!localFilespath) return null;
    const response =  await cloudinary.uploader.upload(localFilespath, {
      resource_type: "auto", //file uploaded
    });
    fs.unlinkSync(localFilespath);//removes localy saved files
    return response;
  } catch (error) {
    fs.unlinkSync(localFilespath);//remove localy savef files
    return null;
  }
  
};
