import { Seller } from "../Models/seller.models.js";
import { User } from "../Models/user.models.js";
import ApiError from "../Utils/ApiError.js";
import ApiResponse from "../Utils/ApiResponse.js";
import asyncHandler from "../Utils/asyncHandler.js";

const createSeller = asyncHandler(async (req, res) => {
  const { fullName, email, phoneNo, password, storeName, storeDescription } =
    req.body;

  let user = await User.findOne({ phoneNo: phoneNo });
  if (!user) {
    user = await User.create({
      fullName,
      email,
      phoneNo,
      password,
      role: "Seller",
    });
    if (!user) {
      throw new ApiError(501, "something went wrong while registering Seller");
    }
  }else{
    user = await User.findByIdAndUpdate(
        user._id,
       { $set: { role: "Seller" } },
       { new: true }
     );
  }
  const seller = await Seller.create({
    user: user._id,
    storeName,
    storeDescription,
  });
  if(!seller){
    throw new ApiError(501, "something went wrong while registering Seller");
  }
  const createdSeller = await Seller.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdSeller) {
    throw new ApiError(502, "something went wrong while registering seller");
  }
  res
    .status(200)
    .json(new ApiResponse(200, createdSeller, "seller registed successfully"));
}

);

export {createSeller}