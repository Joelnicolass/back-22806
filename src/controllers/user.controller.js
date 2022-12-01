import DATABASE from "../models/database.js";

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await DATABASE.USERS;
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

    return;
  }
}

export default UserController;
