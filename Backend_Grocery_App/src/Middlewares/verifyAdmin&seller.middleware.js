import ApiError from "../Utils/ApiError";
import asyncHandler from "../Utils/asyncHandler";

export const verifyAdminSeller = asyncHandler(async (req, res,next) => {
  try {
    const role = req.user?.role;
    if (!role) {
      throw new ApiError(400, " error role not defined");
    }
    if (role === "Admin" || role === "Seller") {
      next();
    } else {
      throw new ApiError(403, "This section is restricted to sellers & admin users only");
    }
  } catch (error) {
    throw new ApiError(401, error?.message || "Unauthorized");
  }
});
