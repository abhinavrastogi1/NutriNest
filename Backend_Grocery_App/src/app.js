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

app.use(errorhandler);
export default app;
