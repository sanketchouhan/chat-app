const mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    messageBody: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

var chatsSchema = new mongoose.Schema({
    chatId: {
        type: String
    },
    messages: [messageSchema]
});

var Chats = mongoose.model("Chat", chatsSchema);
module.exports = Chats;