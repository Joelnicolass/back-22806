import { verifyToken } from "../utils/jwt.js";

export const isValidToken = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ error: "No token provided" });
    return;
  }

  try {
    const decoded = verifyToken(token);
    req.decodedData = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
};
