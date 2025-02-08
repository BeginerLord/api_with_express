import { setError } from "@/utils/errors";
import { RequestHandler } from "express";

export const handleNotFound: RequestHandler = (_req, _res, next) => {
    next(setError(400, "Route Not Found"));
  };