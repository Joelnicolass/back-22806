//const router = require('express').Router()

import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const router = Router();

router.get("/", UserController.getAllUsers);

//module.exports = router;
export default router;
