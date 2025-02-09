import { TOKEN_SECRET_KEY } from "@/constants";
import { TokenPayload } from "./TokenPayload";
import jwt from "jsonwebtoken";

export const generateToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, TOKEN_SECRET_KEY, { expiresIn: '1d' })
}
