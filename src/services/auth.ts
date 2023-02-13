import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREDY_USER";
  const passHash = await encrypt(password);
  const response = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return response;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passHash = checkIs.password;
  const isCorrect = await verified(password, passHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";
  console.log("isCorrect is:", isCorrect);
  return checkIs;
};

export { registerNewUser, loginUser };
