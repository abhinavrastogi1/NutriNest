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
  let cart = [];
  const cartItems = [];
  Object.values(cartCachedData).forEach((productDetails) => {
    cartItems.push({
      productId: new mongoose.Types.ObjectId(productDetails._id),
      quantity: productDetails.quantity,
      discountedPrice: productDetails.discountedPrice,
      originalPrice: productDetails.originalPrice,
      offer: productDetails.offer,
    });
  });
  cart = await Cart.create({
    user: userDetails._id,
    item: cartItems,
  });
  res.json(new ApiResponse(200, cart, "Cart Data"));
});

const addCacheProductToCart = asyncHandler(async (req, res) => {
  const userDetails = req?.user;
  const cartCachedData = Object.values(req?.body);
  let cart = [];
  const user = await User.findById(userDetails._id);
  if (!user) {
    new ApiError(402, "user doesnot exist plz register");
  }
  const cartDetails = await Cart.findOne({ user: userDetails._id });
  if (!cartDetails) {
    throw new ApiError(401, "cart does not exist plz register");
  }
  const cartData = cartDetails?.item;
  let cartItems = [];
  cartCachedData.map((productDetails) => {
    cartItems.push({
      productId: new mongoose.Types.ObjectId(productDetails._id),
      quantity: productDetails.quantity,
      discountedPrice: productDetails.discountedPrice,
      originalPrice: productDetails.originalPrice,
      offer: productDetails.offer,
    });
  });
  cartData.forEach((existingProduct) => {
    // Check if the existing product is already in the cartCachedData
    const existsInCache = cartCachedData.some(
      (cachedProduct) => existingProduct.productId.toString() === cachedProduct._id
    );
    // If it doesn't exist in the cache, add it to cartItems
    if (!existsInCache) {
      cartItems.push({
        productId: existingProduct.productId,
        quantity: existingProduct.quantity,
        discountedPrice: existingProduct.discountedPrice,
        originalPrice: existingProduct.originalPrice,
        offer: existingProduct.offer,
      });
    }
  });
  cart = await Cart.findByIdAndUpdate(
    cartDetails._id,
    { $set: { item: cartItems } },
    { new: true }
  );
  res.json(new ApiResponse(200, cart, "Cart Data"));
});

const getCart=asyncHandler(async(req,res)=>{

})
export { createNewCart, addCacheProductToCart,getCart };
