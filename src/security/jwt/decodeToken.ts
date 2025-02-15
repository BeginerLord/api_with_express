import { TOKEN_SECRET_KEY } from "@/constants";
import jwt from "jsonwebtoken";
import { TokenPayload } from "./TokenPayload";

export const verifyToken  = (token: string): TokenPayload | null => {
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET_KEY) as TokenPayload;
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};
