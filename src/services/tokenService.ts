import { generateToken, TokenPayload } from "@/security";

export const createToken = (user: any): string => {
  const tokenPayload: TokenPayload = {
    uuid: user.uuid,
    email: user.email as string,
    rol: user.rol
  };
  return generateToken(tokenPayload);
};