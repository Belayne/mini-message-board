import db from "../db/queries.js";

function renderNewMsgPage(req, res) {
    res.render("newMessageForm");
}

async function addNewMessage(req, res, next) {
    const {username, message} = req.body;
    const timestamp = new Date().valueOf();
    await db.insertNewMessage(message, timestamp, username);
    next();
}

const newMessageController = {
    get: renderNewMsgPage,
    post: addNewMessage
}

export default newMessageController;