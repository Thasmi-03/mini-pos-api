// routes/authRoutes.js
import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router(); // create router

//  Register route
router.post("/register", register);

//  Login route
router.post("/login", login);

//  Export router
export default router;
