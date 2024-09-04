import { Router } from "express";
import { registerUser } from "../Controllers/user.controller";
const router = Router;
router.route("/register").post(registerUser);
