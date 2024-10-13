import { Cart } from "../Models/cart.models.js";
import { User } from "../Models/user.models.js";
import ApiError from "../Utils/ApiError.js";
import ApiResponse from "../Utils/ApiResponse.js";
import asyncHandler from "../Utils/asyncHandler.js";
import { mongoose } from "mongoose";
const createNewCart = asyncHandler(async (req, res) => {
  const userDetails = req?.user;
  const user = await User.findById(userDetails._id);
  if (!user) {
    new ApiError(402, "user doesnot exist plz register");
  }
  const cartCachedData = req?.body;
  const cartDetails = await Cart.findOne({ user: userDetails._id });
  if (cartDetails) {
    throw new ApiError(401, "cart Already Exist");
  }
  const cart = [];
  const cartItems = [];
  Object.values(cartCachedData).forEach((element) => {
    cartItems.push({
      product: new mongoose.Types.ObjectId(element._id),
      quantity: element.quantity,
    });
  });
  cart = await Cart.create({
    user: userDetails._id,
    item: cartItems,
  });

  res.json(new ApiResponse(200, cart, "Cart Data"));
});

const addCacheProductoCart = asyncHandler(async (req, res) => {
  const userDetails = req?.user;
  const user = await User.findById(userDetails._id);
  if (!user) {
    new ApiError(402, "user doesnot exist plz register");
  }
  const cartCachedData = req?.body;
  const cartDetails = await Cart.findOne({ user: userDetails._id });
 
  const cart=[]
  
  res.json(new ApiResponse(200, cart, "Cart Data"));
});

export { createNewCart, addCacheProductoCart };
