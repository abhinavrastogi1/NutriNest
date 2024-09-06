import mongoose ,{Schema}from "mongoose"
const adminSchema = mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      default: "Admin",
    },
  },
  { timestamps: true },
);

export const Admin = mongoose.model("Admin", adminSchema);
