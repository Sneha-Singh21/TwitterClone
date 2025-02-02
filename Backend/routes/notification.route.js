import express from "express"
import { protectRoute } from "../middleware/protectRoute.js";
import { deleteAllNotifications, deleteNotifications, getNotifications } from "../controllers/notification.controller.js";

const notificationRouter = express.Router();

notificationRouter.get("/", protectRoute, getNotifications);
notificationRouter.delete("/", protectRoute, deleteAllNotifications);
notificationRouter.delete("/:id", protectRoute, deleteNotifications);

export default notificationRouter;