import jwt from "jsonwebtoken";

export const generateToken = (payload, expiresIn = "15m") => {
  return jwt.sign(payload, process.env.SECRET, {
    expiresIn: expiresIn,
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};

export const decodeToken = (token) => {
  return jwt.decode(token);
};
