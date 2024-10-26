import { Router } from "express";
import {
  bestSellers,
  categorytree,
  listProduct,
  recomemdedProduct,
} from "../Controllers/product.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";
import verifyJwt from "../Middlewares/authmiddleware.js";
import { verifyAdmin } from "../Middlewares/verifyAdmin.middleware.js";
const productRouter = Router();
productRouter
  .route("/listProduct")
  .post(verifyJwt, verifyAdmin, upload.array('images',5), listProduct);
productRouter.route("/categorytree").get(categorytree);
productRouter.route("/recomemdedProduct").get(recomemdedProduct);
productRouter.route("/bestSellers").get(bestSellers);
export default productRouter;
