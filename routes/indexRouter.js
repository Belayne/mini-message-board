import { Router } from "express";
import msgController from "../controllers/messageController.js";
const indexRouter = Router();

indexRouter.get("", msgController.get);

export default indexRouter;