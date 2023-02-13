import { compare, hash } from "bcryptjs";

const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};
const verified = async (passPlane: string, passHash: string) => {
  const isCorrect = compare(passPlane, passHash);
  return isCorrect;
};

export { encrypt, verified };
