import { setError } from "@/utils/errors";
import { RequestHandler } from "express";

export const handleNotFound: RequestHandler = (_req, _res, next) => {
    next(setError(404, "Route Not Found"));
  };