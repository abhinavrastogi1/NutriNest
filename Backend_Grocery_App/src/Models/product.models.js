import { Mongoose, mongoose, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    originalPriceWithWeight: {
      type: Map,
      of: Number,
      required: true,
    },
    discount: {
      type: Map,
      of: Number,
      default: {},
    },
    discountedPriceWithWeight: {
      type: Map,
      of: Number,
      required: true,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },
  },
  { timestamps: true },
);

export const Product = mongoose.model("Product", ProductSchema);
