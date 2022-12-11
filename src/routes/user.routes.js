import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import { isValidToken } from "../middlewares/isValidToken.js";

const router = Router();

router.get("/", isValidToken, UserController.getAllUsers);
router.get("/:email", isValidToken, UserController.getByEmail);
router.post("/", isValidToken, UserController.createUser);
router.put("/:email", isValidToken, UserController.updateUser);
router.delete("/:email", isValidToken, UserController.deleteUser);

export default router;
