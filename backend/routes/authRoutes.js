import express from "express";
import { authLimiter } from '../middleware/rateLimiter.js';
import { register, login, logout } from "../controllers/authControllers.js";

const router = express.Router();

router.post('/register',authLimiter, register);
router.post('/login', authLimiter, login);
router.post('/logout', logout);

export default router;