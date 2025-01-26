import express from "express";
import { getMe, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const userRouter = express.Router();

userRouter.get("/me",protectRoute, getMe)
userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.post("/logout", logout)

export default userRouter;