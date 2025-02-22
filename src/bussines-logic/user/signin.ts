import { comparePassword, createToken, findUserByEmail } from "@/services";

interface SigninDto {
  email: string;
  password: string;
}

export const Signin = async (
  data: SigninDto
): Promise<{ token: string } | Error> => {
  try {
    const user = await findUserByEmail(data.email);

    if (!user || !comparePassword(data.password, user.password)) {
      throw new Error("Invalid email or password");
    }
    const token = createToken(user);
    return { token };
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};
