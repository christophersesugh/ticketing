import * as e from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: e.Request,
  res: e.Response,
  next: e.NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  res.status(400).send({
    message: err.message
      ? err.message
      : "Oops! Something went wrong. Please try again later.",
  });
};
