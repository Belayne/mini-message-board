import { Message, messageList } from "../messages.js";

function renderNewMsgPage(req, res) {
    res.render("newMessageForm");
}

function addNewMessage(req, res, next) {
    const {username, message: text} = req.body;
    const newMessage = new Message(text, username);
    messageList.addMessage(newMessage);

    next();
}

const newMessageController = {
    get: renderNewMsgPage,
    post: addNewMessage
}

export default newMessageController;