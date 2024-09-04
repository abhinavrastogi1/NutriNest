import ApiError from "../Utils/ApiError.js";

export const errorhandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    // Handle ApiError
    res.status(err.statusCode).json({
      message: err.message,
      errors: err.errors,
      success: err.success,
      data: err.data,
    });
  } else {
    // Handle other errors
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({
      message: "An unexpected error occurred",
      success: false,
    });
  }
};
