import { getModel } from "@/config/database";
import { Collection } from "@/constants";
import { User, UserSchemaMongo } from "@/entities";
import { setError } from "@/utils/errors";
import bcrypt from "bcrypt";

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  return (await model.findOne({ email })) as User | null;
};

export const checkUserExists = async (email: string): Promise<void> => {
  const user = await findUserByEmail(email);
  if (user) {
    throw setError(400, "El usuario ya existe");
  }
};

export const createUser = async (data: any): Promise<User> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const newPassword = await bcrypt.hashSync(data.password || "", 10);
  const newUser = new model({
    ...data,
    password: newPassword,
    rol: data.rol
  }) as typeof model.prototype;
  await newUser.save();
  return newUser;
};

