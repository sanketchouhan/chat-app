var express = require('express');
const bodyParser = require('body-parser');
var Chats = require("../model/chats.model")
var chatRouter = express.Router();

chatRouter.use(bodyParser.json());

// get/update user chats
chatRouter.route('/:chatId')
    .get((req, res, next) => {
        Chats.findOne({ chatId: req.params.chatId })
            .then((chat) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(chat);
            }, (err) => {
                next(err)})
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Chats.findOne({ chatId: req.params.chatId })
            .then((chat) => {
                if (chat != null) {
                    chat.messages.unshift(req.body);
                    chat.save()
                        .then((chat) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(chat);
                        }, (err) => {
                            res.statusCode = 400;
                            res.json({ 'error': "Error in saving chat" });
                        });
                }
                else {
                    var chat = new Chats();
                    chat.chatId = req.params.chatId;
                    chat.messages.push({"sender": req.body.sender, "messageBody": req.body.messageBody});
                    chat.save()
                        .then((chat) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(chat);
                        }, (err) => {
                            res.statusCode = 400;
                            res.setHeader('Content-Type', 'application/json');
                            res.json({ 'error': "Error in saving new chat" });
                        });
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = chatRouter;