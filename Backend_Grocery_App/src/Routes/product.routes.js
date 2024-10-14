import { Router } from "express";
import {
  categorytree,
  listProduct,
  productInfo,
  recomemdedProduct,
  searchProduct,
} from "../Controllers/product.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";
import verifyJwt from "../Middlewares/authmiddleware.js";
import { verifyAdmin } from "../Middlewares/verifyAdmin.middleware.js";
const productRouter = Router();
productRouter
  .route("/listProduct")
  .post(verifyJwt, verifyAdmin, upload.array("images", 5), listProduct);
productRouter.route("/categorytree").get(categorytree);
productRouter.route("/recomemdedProduct").get(recomemdedProduct);
productRouter.route("/searchProduct").post(searchProduct);
productRouter.route("/productInfo").post(productInfo);

export default productRouter;
