import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  UserExist,
} from "../Controllers/user.controller.js";
import verifyJwt from "../Middlewares/authmiddleware.js";
import {
  addCacheProductToCart,
  createNewCart,
  getCart,
  deleteProductFromCart,
  updateCart,
} from "../Controllers/cart.controller.js";
const userRouter = Router();
userRouter.route("/registerUser").post(registerUser);
userRouter.route("/UserExist").post(UserExist);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").post(verifyJwt, logoutUser);
userRouter.route("/createNewCart").post(verifyJwt, createNewCart);
userRouter
  .route("/addCacheProductToCart")
  .post(verifyJwt, addCacheProductToCart);
userRouter.route("/getCart").get(verifyJwt, getCart);
userRouter.route("/updateCart").patch(verifyJwt, updateCart);
userRouter
  .route("/deleteProductFromCart")
  .patch(verifyJwt, deleteProductFromCart);

export default userRouter;
