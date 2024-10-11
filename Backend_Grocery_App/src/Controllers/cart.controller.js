import { Cart } from "../Models/cart.models.js";
import { User } from "../Models/user.models.js";
import ApiError from "../Utils/ApiError.js";
import ApiResponse from "../Utils/ApiResponse.js";
import asyncHandler from "../Utils/asyncHandler.js";

const CartData = asyncHandler(async (req, res) => {
  const userDetails = req?.user;
  const user = await User.findById(userDetails._id);
  const cart = req?.body;
  console.log(req.body);
  if (!user) {
    new ApiError(402, "user doesnot exist plz register");
  }

  const cartDetails = await Cart.findOne({ user: userDetails._id });
  if (!cartDetails) {
    const cart = await Cart.create({
      user: userDetails._id,
    });
    console.log(cart);
  } else {
    console.log("userExist");
  }

  res.json(new ApiResponse(200, req.body, "Cart Data"));
});

export { CartData };
