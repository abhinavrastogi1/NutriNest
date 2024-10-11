import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  UserExist,
} from "../Controllers/user.controller.js";
import verifyJwt from "../Middlewares/authmiddleware.js";
import { CartData } from "../Controllers/cart.controller.js";
const userRouter = Router();
userRouter.route("/registerUser").post(registerUser);
userRouter.route("/UserExist").post(UserExist);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").post(verifyJwt, logoutUser);
userRouter.route("/cart").post(verifyJwt, CartData);
export default userRouter;
