import mongoose from "mongoose";
import bcrypt from "bcrypt"

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index:true,
      match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"please fill a valid email"]
    },
    role: {
      type: String,
      default:"Admin"
    },
    passwordHash:{
        type:String,
        required:[true,"password is required"]
    },
  },
  { timestamps: true }
);

adminSchema.pre("save",async(next)=>{
if(!this.ismodified(passwordHash))return next();
this.passwordHash=await bcrypt.hash(this.passwordHash,10)
next();
})

adminSchema.methods.isPasswordCorrect=async(passwordHash)=>{
return await bcrypt.compare(password,this.passwordHash)
}



export const Admin = mongoose.model("Admin", adminSchema);
