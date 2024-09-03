class ApiError extends Error {
  constructor(
    statusCode, // http statuscode
    message = "Something went wrong", // default message
    errors = [], // optional error array
    stack = "" // optional stack trace
  ) {
    super(message); // invoke Error class and passes it to the Error class
    this.statusCode = statusCode; //status code
    this.errors = errors; // it will give
    this.data = null; // initialise data property to false
    this.success = false; // initialize success property to default false
    if (stack) {
      this.stack = stack; //use the provided stack if the stack is not provided
    } else {
      Error.captureStackTrace(this, this.constructor); // Capture stack trace if not provided
      // Error.captureStackTrace is a Node.js method that creates a stack trace.
      // It helps trace where the error originated in your code.
    }
  }
}
export default ApiError;
