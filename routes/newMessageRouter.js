import Router from "express";
import newMessageController from "../controllers/newMessageController.js";

const newMessageRouter = Router();

newMessageRouter.get("", newMessageController.get);
newMessageRouter.post("", newMessageController.post);

//redirect to index page after sending a new message.
newMessageRouter.post("", (req, res) => {
    res.redirect("/");
})

export default newMessageRouter;