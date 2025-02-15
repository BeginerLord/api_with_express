import { getModel } from "@/config/database";
import { Collection } from "@/constants";
import { User, UserSchemaMongo } from "@/entities";
import { verifyToken } from "@/security";


export const getUserProfile = async (token: string): Promise<User | Error> => {
    const decodedUser = verifyToken(token);
    if (!decodedUser) {
      return new Error("Token no válido");
    }
    const model = await getModel(Collection.USERS, UserSchemaMongo);
    const user = await model.findOne({ email: decodedUser.email });
    if (!user) {
      return new Error("Usuario no encontrado");
    }
    return { ...(user._doc as User) };
  };