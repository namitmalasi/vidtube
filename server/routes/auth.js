import express from "express";
import { signup } from "../controllers/auth.js";

const router = express.Router();

// Create a user
router.post("/signup", signup);
// Sign In
// router.post("signin", "");
// // google
// router.post("google", "");

export default router;
