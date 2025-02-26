import { getModel } from "@/config/database";
import { Collection } from "@/constants";
import { User, UserSchemaMongo } from "@/entities";
import { verifyToken } from "@/security";
import { setError } from "@/utils/errors";
import { RequestHandler } from "express";

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
    const user = await model.findOne({ uuid: validateToken.uuid }).lean();
    if (!user) {
      return next(setError(404, "User not found"));
    }
    // Validar que el objeto tiene todas las propiedades necesarias
    const validatedUser = user as unknown as User;
    if (
      !validatedUser.uuid ||
      !validatedUser.name ||
      !validatedUser.email ||
      !validatedUser.password ||
      !validatedUser.rol // Asegúrate de que el rol esté presente
    ) {
      return next(setError(500, "Invalid user object"));
    }

    req.user = validatedUser; // Asigna el usuario decodificado a 'req.user'

    next();
  } catch (error) {
    return next(setError(401, `Not authorized -> ${(error as Error).message}`));
  }
};

const extractToken = (authHeader: string): string => {
  return authHeader.split(" ")[1];
};
