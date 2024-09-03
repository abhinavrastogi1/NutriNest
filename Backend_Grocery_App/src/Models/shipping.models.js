import mongoose from "mongoose";

const shippingSchema = mongoose.Schema(
  {
    method: { type: String, required: true },
    cost: { type: Number, required: true },
    estimatedDelivery: { type: Date, required: true },
  },
  { timestamps: true },
);

export const Shipping = mongoose.model("Shipping", shippingSchema);
