import mongoose ,{Schema}from "mongoose"
const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
      index: true,
    }
  },
  { timestamps: true },
);

export const Category = mongoose.model("Category", categorySchema);
