var express = require('express');
const bodyParser = require('body-parser');
var User = require("../model/user.model")
var userRouter = express.Router();

userRouter.use(bodyParser.json());


userRouter.post('/login', function (req, res, next) {
    // console.log("inside login post");
    User.findOne({ username: req.body.username, password: req.body.password })
        .then((user) => {
            // console.log("inside find one");
            if (user != null) {
                // console.log("inside user!=null");
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            } else {
                // console.log("inside user==null");
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "status": "user not exist" });
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
                res.json({ "status": "user already exist" });
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

module.exports = userRouter;