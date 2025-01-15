
class Message {
    constructor(text, user = "Guest") {
        this.text = text;
        this.user = user;
        this.date = new Date();
    }
}

class MessageList {
    constructor(...messages) {
        this.messages = messages;
    }

    addMessage(msg) {
        this.messages.push(msg);
    }
}

const sampleMessage_1 = new Message("Hello there.", "Arlnando");
const sampleMessage_2 = new Message("Howdy Planet!", "Xavier");

const messageList = new MessageList(sampleMessage_1, sampleMessage_2);

export {messageList, Message};