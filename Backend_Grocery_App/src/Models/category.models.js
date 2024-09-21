import mongoose, { Schema } from "mongoose";
const categorySchema = new Schema({
 category: {
    level1: {
      type: String,
      required: true,
      index: true,
    },
    level2: {
      type: String,
      required: true,
      index: true,
    },
    level3: {
      type: String,
      required: true,
      index: true,
    },
  }},
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);

/*
{
level1:
{
      type: String,
      required: true,
      index: true,
    }
      level2:{
      type: String,
      required: true,
      index: true,
    }
      level3:{
      {
      type: String,
      required: true,
      index: true,
    }}

}
 */
