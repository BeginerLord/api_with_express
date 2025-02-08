import { getModel } from "@/config/database";
import { Collection } from "@/constants";
import { UserSchemaMongo } from "@/entities";
import { generateToken } from "@/security";
import { setError } from "@/utils/errors";
import { RequestHandler } from "express";

export const authorize: RequestHandler = async (req, _res, next) => {
  try {
    const model = getModel(Collection.USERS, UserSchemaMongo);
    const authHeader = req.headers.authorization;

    if (!authHeader) return next(setError(401, "Not authorized"));

    const token = authHeader.split(' ')[1];

    const validateToken = generateToken(token);

    if (!validateToken || !validateToken.uuid)
      return next(setError(401, "Not authorized - invalid token"));

    const user = await model.findOne({ uuid: validateToken.uuid });
    if (!user) return next(setError(404, "User not found"));

    (req as any).user = user;

    next();
  } catch (error) {
    return next(setError(401, `Not authorized -> ${error}`));
  }
};