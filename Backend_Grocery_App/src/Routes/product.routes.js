import { Router } from "express";
import { listProduct } from "../Controllers/product.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";
import verifyJwt from "../Middlewares/authmiddleware.js";
import { verifyAdmin } from "../Middlewares/verifyAdmin.middleware.js";
const productRouter = Router();
productRouter
  .route("/listProduct")
  .post(verifyJwt, verifyAdmin, upload.array("images", 5), listProduct);

export default productRouter;
