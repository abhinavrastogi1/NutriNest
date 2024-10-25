import mongoose, { Schema } from "mongoose";
const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    item: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          required: true,
          default: 0,
        },
        discountedPrice: { type: Number, required: true },
        originalPrice: { type: Number, required: true },
        offer: {
          type: Number,
          required: true,
        },
        id: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
