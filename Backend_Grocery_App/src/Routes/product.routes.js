import { Router } from "express";
import { verifySeller } from "../Middlewares/verifySeller.middleware.js";
import { listProduct } from "../Controllers/product.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";
import verifyJwt from "../Middlewares/authmiddleware.js";
const productRouter = Router();
productRouter
  .route("/listProduct")
  .post(verifyJwt, verifySeller, upload.array("images", 5), listProduct);

export default productRouter;
