import { Router } from "express";
import {
  findProductsByCategory,
  findProductsBySubCategory,
  findProductsBySubSubCategory,
} from "../Controllers/product.controller.js";

export const findProduct = Router();

findProduct.route("/:categoryName").get(findProductsByCategory);
findProduct
  .route("/:categoryName/:subCategoryName")
  .get(findProductsBySubCategory);
findProduct
  .route("/:categoryName/:subCategoryName/:subSubcateoryName")
  .get(findProductsBySubSubCategory);
