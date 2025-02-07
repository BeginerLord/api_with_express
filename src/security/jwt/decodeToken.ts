import { TOKEN_SECRET_KEY } from "@/constants";
import { User } from "@/entities";
import jwt from "jsonwebtoken";

export const decodeToken = (token: string): User | null => {
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET_KEY) as User;
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};
