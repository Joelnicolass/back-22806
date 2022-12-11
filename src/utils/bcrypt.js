import bcrypt from "bcryptjs";

export const encrypt = async (data, salt = 10) => {
  const s = await bcrypt.genSalt(salt);
  const hash = await bcrypt.hash(data, s);
  return hash;
};

export const compare = async (data, hash) => {
  return await bcrypt.compare(data, hash);
};
