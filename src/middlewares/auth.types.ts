import { Request } from "express";
import { RolType } from "@/entities/common/constants";

export interface AuthenticatedRequest extends Request {
  user?: {
    _id: string;
    role: RolType;
    // Añadir otras propiedades del usuario si es necesario
  };
}