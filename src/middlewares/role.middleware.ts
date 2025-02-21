import { RolType } from "@/entities";
import { setError } from "@/utils/errors";
import { RequestHandler } from "express";

export const checkRole = (requiredRole: RolType): RequestHandler => {
    return (req, _res, next) => {
      const user = (req as any).user;
  
      if (!user || user.role !== requiredRole) {
        return next(setError(403, "Forbidden - insufficient permissions"));
      }
  
      next();
    };
  };