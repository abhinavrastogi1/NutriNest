import asyncHandler from "../Utils/asyncHandler.js";
import ApiError from "../Utils/ApiError.js";
import { User } from "../Models/user.models.js";
import ApiResponse from "../Utils/ApiResponse.js";
import twilio from "twilio";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access and refresh tokens"
    );
  }
};

// registration of use
const registerUser = asyncHandler(async (req, res) => {
  {
    /*1.get data from frontend
    2.extract info from the req body
    3.fullName email password phoneno.
    4. verify user exists
    5.create user in data base
    6 send respnse removing password and referesh token
     */
    const { fullName, email, password, phoneNo } = req.body;
    //console.log(req.body)
    if (fullName === "") {
      throw new ApiError(400, "fullname is required");
    }
    if (password === "") {
      throw new ApiError(400, "password is required");
    }
    if (phoneNo === "") {
      throw new ApiError(400, "phoneNo. is required");
    }
    if (email === "") {
      throw new ApiError(400, "email is required");
    }
    const userExist = await User.findOne({ phoneNo });
    if (userExist) {
      throw new ApiError(409, " user already exist ");
    }
    const user = await User.create({
      fullName,
      email,
      password,
      phoneNo,
    });
    if (!user) {
      throw new ApiError(501, "something went wrong while registering user");
    }
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      throw new ApiError(502, "something went wrong while registering user");
    }
    res
      .status(200)
      .json(new ApiResponse(200, createdUser, "user registed successfully"));
  }
});

// login for user

const loginUser = asyncHandler(async (req, res) => {
  const { password, phoneNo } = req.body;

  const user = await User.findOne({ phoneNo });

  if (!user) {
    throw new ApiError(401, "user doesn't exist please register");
  }

  const isPasswordValid = user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiResponse(403, "password is incorrect");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  if ((!accessToken, !refreshToken)) {
    throw new ApiError(
      501,
      "something went wrong while generating access token"
    );
  }
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(201, loggedInUser, "log in successfull"));
});
const logoutUser = asyncHandler(async (req, res) => {
  console.log(req.user);
  const userId = req.user._id; // req.user from verfyjwt middleware
  console.log(await User.findById(userId));
  await User.findByIdAndUpdate(
    userId,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(201)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(201, {}, "user logged out successfully"));
});
export { registerUser, generateAccessAndRefreshTokens, loginUser, logoutUser };
