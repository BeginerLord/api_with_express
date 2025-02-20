import { getModel } from "@/config/database";
import { Collection } from "@/constants";
import { RolType, UserSchemaMongo } from "@/entities";
import { verifyToken } from "@/security";
import { setError } from "@/utils/errors";
import { NextFunction, RequestHandler, Request, Response } from "express";

export const authorize: RequestHandler = async (req, _res, next) => {
  try {
    const model = getModel(Collection.USERS, UserSchemaMongo);
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return next(setError(401, "Not authorized"));
    }

    const token = extractToken(authHeader);

    const validateToken = verifyToken(token);

    if (!validateToken || !validateToken.uuid) {
      return next(setError(401, "Not authorized - invalid token"));
    }

    const user = await model.findOne({ uuid: validateToken.uuid });
    if (!user) {
      return next(setError(404, "User not found"));
    }

    (req as any).user = user;

    next();
  } catch (error) {
    return next(setError(401, `Not authorized -> ${(error as Error).message}`));
  }
};

export const authorizeRoles = (...allowedRoles: RolType[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!allowedRoles.includes((req as any).user.rol)) {
      return res.status(403).send({ error: "Access denied" });
    }
    next();
  };
};

const extractToken = (authHeader: string): string => {
  return authHeader.split(" ")[1];
};