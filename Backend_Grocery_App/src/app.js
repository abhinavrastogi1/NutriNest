import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorhandler } from "./Middlewares/error.middleware.js";

// Importing routes
import userRouter from "./Routes/user.route.js";
import productRouter from "./Routes/product.routes.js";
import { findProduct } from "./Routes/findProduct.js";

const app = express();

// Configure CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware for parsing requests
app.use(express.json({ limit: "16kb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/users", userRouter);
app.use("/api/product", productRouter);
app.use("/api/findProduct", findProduct);

// Error handler middleware
app.use(errorhandler);

export default app;
