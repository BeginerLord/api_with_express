import { createUserDto, RolType } from "@/entities";
import { checkUserExists, createToken, createUser } from "@/services";

export const Signup = async (
  data: createUserDto
): Promise<{ token: string } | Error> => {
  try {
    await checkUserExists(data.email);

    const newUser = await createUser({
      ...data,
      rol: RolType.USERNOTES, // Asigna el rol predeterminado
    });

    const token = createToken(newUser);
    return { token };
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};
