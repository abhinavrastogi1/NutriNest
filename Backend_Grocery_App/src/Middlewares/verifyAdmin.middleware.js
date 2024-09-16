import ApiError from "../Utils/ApiError.js";
import asyncHandler from "../Utils/asyncHandler.js";

export const verifyAdmin = asyncHandler(async (req, res, next) => {
  try {
    const role = req.user?.role;
    if (!role) {
      throw new ApiError(400, " error role not defined");
    }
    if (role === "Admin") {
      next();
    } else {
      throw new ApiError(403, "This section is restricted to admin users only");
    }
  } catch (error) {
    throw new ApiError(401, error?.message || "Unauthorized");
  }
});
