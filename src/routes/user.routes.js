//const router = require('express').Router()

import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const router = Router();

router.get("/", UserController.getAllUsers);
router.get("/:email", UserController.getByEmail);
router.post("/", UserController.createUser);
router.put("/:email", UserController.updateUser);
// router.delete("/:emial", UserController.deleteUser); -> findAndDelete

//module.exports = router;
export default router;
