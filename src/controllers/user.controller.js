import User from "../models/user.model.js";

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await User.find({}, { _id: 1, email: 1 });
      res.status(200).json({ users });
      return;
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
  }

  static async createUser(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Please provide email and password" });
      return;
    }

    try {
      const user = await User.create({ email, password });
      user.save();

      res.status(201).json({ msg: "User created" });

      return;
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
  }

  static async getByEmail(req, res) {
    const { email } = req.params;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.status(200).json({ user });
      return;
    } catch (error) {}

    return;
  }

  static async updateUser(req, res) {
    const { email } = req.params;
    const { user } = req.body;

    const newUser = {
      email: user.email,
      password: user.password,
    };

    try {
      const updateUser = await User.findOneAndUpdate({ email }, newUser, {
        new: true,
      });
      res.status(200).json({ updateUser });
      return;
    } catch {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
  }

  static async deleteUser(req, res) {
    const { email } = req.params;

    console.log(email);

    try {
      const deleteUser = await User.findOneAndDelete({ email });

      if (!deleteUser) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.status(200).json({ deleteUser });
      return;
    } catch {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
  }
}

export default UserController;
