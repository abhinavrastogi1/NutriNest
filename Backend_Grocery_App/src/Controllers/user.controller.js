import asyncHandler from "../Utils/asyncHandler"
import ApiError from "../Utils/ApiError"
import User from "../Models/user.models"
import mongoose from "mongoose"
const generateAccessAndRefreshTokens =async (userId)=>{
try {
        const user= await User.findById(userId)
    const accessToken= await user.generateAccessToken()
    const refreshToken= await user.generateRefreshToken()
    user.refreshToken=refreshToken;
     await user.save({validateBeforeSave:false})
    return {accessToken,refreshToken}


} catch (error) {
    throw new ApiError(500,"Something went wrong while generating access and refresh tokens")
}
}
const registerUser=asyncHandler(async(req,res)=>{

})
export {registerUser,generateAccessAndRefreshTokens}