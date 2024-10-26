import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorhandler } from "./Middlewares/error.middleware.js";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CORS_ORIGIN);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json({ limit: "16kb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(express.static("public"));
app.use(cookieParser());
//routes import
import userRouter from "./Routes/user.route.js";
app.use("/api/users", userRouter);

import productRouter from "./Routes/product.routes.js";

app.use("/api/product", productRouter);
//error hadler midleware
import { findProduct } from "./Routes/findProduct.js";
app.use("/api/findProduct", findProduct);
app.use(errorhandler);
export default app;
