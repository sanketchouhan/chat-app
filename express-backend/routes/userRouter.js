var express = require('express');
const bodyParser = require('body-parser');
var User = require("../model/user.model")
var userRouter = express.Router();

userRouter.use(bodyParser.json());


userRouter.post('/login', function (req, res, next) {
    User.findOne({ username: req.body.username, password: req.body.password }).populate("friends").populate("requests")
        .then((user) => {
            if (user != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "status": "User does not exists" });
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});

userRouter.post('/register', function (req, res, next) {
    User.findOne({ username: req.body.username })
        .then((user) => {
            if (user != null) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "status": "User already exists" });
            } else {
                User.create(req.body)
                    .then((user) => {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(user);
                    }, (err) => next(err));
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});

userRouter.get('/allusers', function (req, res, next) {
    User.find()
        .then((users) => {
            if (users != null) {
                users.forEach(user => {
                    delete user['friends'];
                    delete user['requests'];
                });
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(users);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "res": "No user found" });
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});
userRouter.get('/getSearchUsers/:keyword', function (req, res, next) {
    User.find({ username: {$regex: req.params.keyword ,$options:'i'} }).limit( 20 )
        .then((users) => {
            if (users != null) {
                users.forEach(user => {
                    delete user['friends'];
                    delete user['requests'];
                });
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(users);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "res": "No user found" });
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});

userRouter.post('/profilePicupdate/:userId', function (req, res, next) {
    User.update({ _id: req.params.userId }, { $set: { profilePicUrl: req.body.url } })
        .then((users) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(users);
        }, (err) => next(err))
        .catch((err) => next(err));
});
userRouter.post('/addFriend/:friendId', function (req, res, next) {
    User.findOne({ _id: req.params.friendId })
        .then((user1) => {
            if (user1 != null) {
                if (!user1.requests.find(i => i._id == req.body.userId) || user1.requests.length == 0) {
                    // console.log("inside user for each");
                    user1.requests.push(req.body.userId);
                    user1.save()
                        .then((user2) => {
                            // console.log("inside user request saved");
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(user2);
                        }, (err) => next(err));
                }
            } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "status": "User does not exists" });
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});
userRouter.post('/confirmRequest/:userId', function (req, res, next) {
    User.findOne({ _id: req.params.userId })
        .then((user) => {
            if (user != null) {
                user.friends.push(req.body.friendId);
                user.requests = user.requests.filter(i => { return i._id != req.body.friendId });
                user.save()
                    .then((user) => {
                        User.findOne({ _id: req.body.friendId })
                            .then((user) => {
                                user.friends.push(req.params.userId);
                                user.save()
                                    .then((user) => {
                                        res.statusCode = 200;
                                        res.setHeader('Content-Type', 'application/json');
                                        res.json(user);
                                    }, (err) => next(err));
                            }, (err) => next(err));
                    }, (err) => next(err));
            } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "status": "User does not exists" });
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});
userRouter.post('/deleteRequest/:userId', function (req, res, next) {
    User.findOne({ _id: req.params.userId })
        .then((user) => {
            if (user != null) {
                // console.log("inside user");
                user.requests = user.requests.filter(i => { return i._id != req.body.friendId });
                user.save()
                    .then((user) => {
                        // console.log("inside user request saved");
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(user);
                    }, (err) => next(err));

            } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "status": "User does not exists" });
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});


module.exports = userRouter;