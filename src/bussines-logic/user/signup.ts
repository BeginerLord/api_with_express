import { getModel } from "@/config/database";
import { Collection } from "@/constants";
import { createUserDto, User, UserSchemaMongo } from "@/entities";
import { generateToken, TokenPayload } from "@/security";
import { setError } from "@/utils/errors";
import bcrypt from "bcrypt";

export const Signup = async (
  data: createUserDto
): Promise<{ token: string } | Error> => {
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = (await model.findOne({ email: data.email })) as User;
  if (user) {
    return setError(400, "El usuario ya existe");
  }
  const newPassword = await bcrypt.hashSync(data.password || "", 10);
  const newUser = new model({
    ...data,
    password: newPassword,
  }) as typeof model.prototype;
  await newUser.save();
  const tokenPayload: TokenPayload = {
    uuid: newUser._id.toString(),
    email: newUser.email as string,
  };
  const token = generateToken(tokenPayload);
  return { token };
};
