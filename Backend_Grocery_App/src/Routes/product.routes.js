import { Router } from "express";
import { listProduct, updatecategory } from "../Controllers/product.controller.js";
import { upload } from "../Middlewares/multer.middleware.js";
import verifyJwt from "../Middlewares/authmiddleware.js";
import { verifyAdmin } from "../Middlewares/verifyAdmin.middleware.js";
const productRouter = Router();
productRouter
  .route("/listProduct")
  .post(verifyJwt, verifyAdmin, upload.array("images", 5), listProduct);

  productRouter.route("/updatecategory").post(upload.none(),updatecategory)
export default productRouter;
