import { Router } from "express";
import authMiddleware from "../middleware/auth.js";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/authController.js";


const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", authMiddleware, getMe);

export default router;
