import { mongoose, Schema } from "mongoose";

const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    item: [{
      product: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        }
    }]
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
