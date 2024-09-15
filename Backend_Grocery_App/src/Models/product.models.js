import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {

    productName: {
      type: String,
      required: true,
      index: true,
    },
    images: {
      type: [String],
      required: true,
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
      index: true,
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
      required:true,
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
  { timestamps: true }
);

export const Product = mongoose.model("Product", ProductSchema);
