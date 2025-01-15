import { Message, messageList } from "../messages.js";

function renderNewMsgPage(req, res) {
    res.render("newMessageForm");
}

const newMessageController = {
    get: renderNewMsgPage,
}

export default newMessageController;