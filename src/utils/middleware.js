import { ErrorResponse } from "./errors";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ErrorResponse) {
    console.log("this is an ErrorResponse");
  }

  res
    .status(err.statusCode || 500)
    .json({ success: false, error: err.message || "Server error" });
};

export const tryCatch = (fn) => (req, res, next) => {
  try {
    return fn(req, res, next);
  } catch (err) {
    errorHandler(err, req, res, next);
  }
};
