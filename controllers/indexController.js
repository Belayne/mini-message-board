import {messageList} from "../messages.js";

function getMessages(req, res, next) {
    const messages = messageList.messages;
    //console.log(messages)
    res.render("index", {messages})
}

const indexController = {
    get: getMessages,
}

export default indexController;

