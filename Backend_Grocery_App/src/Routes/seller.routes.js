import { Router } from "express";
import { createSeller } from "../Controllers/Seller.controller.js";

const SellerRoutes=Router()
SellerRoutes.route("/register").post(createSeller)
export default SellerRoutes