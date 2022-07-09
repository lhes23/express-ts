import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const createHttpErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(new createHttpError.NotFound());
};

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status).send({
    status: err.status,
    message: err.message,
  });
};
