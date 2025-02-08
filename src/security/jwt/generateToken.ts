import { TOKEN_SECRET_KEY } from "@/constants"
import { TokenPayload } from "./TokenPayload"
import jwt from "jsonwebtoken"

export const generateToken = (token: string): TokenPayload | null => {
  return jwt.verify(token, TOKEN_SECRET_KEY) as TokenPayload
}