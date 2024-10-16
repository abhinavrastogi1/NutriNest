import { Router } from "express";
import {
  findProductsByCategory,
  findProductsBySubCategory,
  findProductsBySubSubCategory,
  searchProduct,productDetails
} from "../Controllers/product.controller.js";

export const findProduct = Router();

findProduct.route("/:mainCategory").get(findProductsByCategory);
findProduct
  .route("/:mainCategory/:subCategory")
  .get(findProductsBySubCategory);
findProduct
  .route("/:mainCategory/:subCategory/:subSubCategory")
  .get(findProductsBySubSubCategory);
  findProduct.route("/searchProduct").post(searchProduct);
  findProduct.route("/productDetails").post(productDetails);