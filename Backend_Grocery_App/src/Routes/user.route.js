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
} from "../Controllers/cart.controller.js";
const userRouter = Router();
userRouter.route("/registerUser").post(registerUser);
userRouter.route("/UserExist").post(UserExist);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").post(verifyJwt, logoutUser);
userRouter.route("/createNewCart").post(verifyJwt, createNewCart);
userRouter.route("/addCacheProductToCart").post(verifyJwt, addCacheProductToCart);
export default userRouter;
