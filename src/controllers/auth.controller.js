import User from "../models/user.model.js";
import { compare, encrypt } from "../utils/bcrypt.js";
import { decodeToken, generateToken, verifyToken } from "../utils/jwt.js";

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    try {
      const user = await User.findOne({ email });

      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      const isValidPassword = await compare(password, user.password);

      if (!isValidPassword) {
        res.status(401).json({ error: "Invalid password" });
        return;
      }

      const token = generateToken({ id: user._id, email }, "10s");

      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });

      res.status(200).json({
        user: {
          id: user._id,
          email: user.email,
        },
      });

      return;
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
  }

  static async register(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ error: "User already exists" });
        return;
      }

      const newUser = new User({
        email,
        password: await encrypt(password),
      });

      const savedUser = await newUser.save();

      const token = generateToken({ id: savedUser._id, email });

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
      });

      res.status(201).json({
        user: {
          id: savedUser._id,
          email: savedUser.email,
        },
      });

      return;
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
  }

  static async logout(req, res) {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successfully" });
    return;
  }
}

export default AuthController;
