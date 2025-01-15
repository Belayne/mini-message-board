
class Message {
    constructor(text, user = "Guest") {
        this.text = text;
        this.user = user;
        this.date = new Date();
    }
}

const sampleMessage_1 = new Message("Hello there.", "Arlnando");
const sampleMessage_2 = new Message("Howdy Planet!", "Xavier");

//model
const messages = [sampleMessage_1, sampleMessage_2];

function getMessages(req, res, next) {
    res.render("index", {messages})
}

const msgController = {
    get: getMessages,
}

export default msgController;

