import bcrypt from "bcrypt";

export const passwordHash = (password: string, length: number): string => {
  return bcrypt.hashSync(password, length);
};

export const comparePassword = (
  requestPassword: string,
  userPasswordInDB: string | any
): boolean => {
  return bcrypt.compareSync(requestPassword, userPasswordInDB);
};

export const validatePassword = (password: string): boolean => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;
  return regex.test(password);
};
