import { mongoose, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const userSchema= new Schema({
    
        name: {
          type: String,
          required: true,
          trim: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
          index: true,
          match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "please fill a valid email",
          ],
        },
        role: {
          type: String,
           enum:["Admin","User","Seller"],
           default:"User"
        },
        passwordHash: {
          type: String,
          required: [true, "password is required"],
        },
      },
      { timestamps: true }
    );
    userSchema.pre("save", async (next) => {
        if (!this.isModified(passwordHash)) return next();
        this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
        next();
      });
      
      userSchema.methods.isPasswordCorrect = async (password) => {
        return await bcrypt.compare(password, this.passwordHash);
      };
      

export const User =mongoose.model("User",userSchema)
