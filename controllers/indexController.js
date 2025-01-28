import db from "../db/queries.js"

async function getMessages(req, res, next) {
    const messages = await db.getAllMessages();
    res.render("index", {messages})
}

const indexController = {
    get: getMessages,
}

export default indexController;

