import express from "express";
import { followUnfollowUser, getSuggestedUsers, getUserProfile, updateUserProfile } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const userRouter = express.Router();

userRouter.get("/profile/:username",protectRoute, getUserProfile);
userRouter.get("/suggested",protectRoute, getSuggestedUsers);
userRouter.post("/follow/:id",protectRoute, followUnfollowUser);
userRouter.post("/update/",protectRoute, updateUserProfile);

export default userRouter;