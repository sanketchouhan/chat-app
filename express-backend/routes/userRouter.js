var express = require('express');
const bodyParser = require('body-parser');
var User = require("../model/user.model")
var userRouter = express.Router();
const bcrypt = require('bcrypt');
userRouter.use(bodyParser.json());

const crypto = require('crypto');

// send mail npm package
var nodemailer = require('nodemailer');

// new register otp
var userOtp = [];
var otpData = {
    email: '',
    otp: ''
}

// forgot password otp
var passwordResetLinks = [];
var passwordResetData = {
    userId: '',
    linkId: ''
}

// login route
userRouter.post('/login', function (req, res, next) {
    User.findOne({ email: req.body.email }).populate("friends").populate("requests")
        .then((user) => {
            if (user != null && bcrypt.compareSync(req.body.password, user.password)) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(user);
            } else {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "status": "Email or Password is incorrect" });
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});

// send register otp route
userRouter.post('/register', function (req, res, next) {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user != null) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "status": "Email already exists" });
            } else {
                var newOtpData = otpData;
                newOtpData.email = req.body.email;
                newOtpData.otp = (Math.floor(100000 + Math.random() * 900000)).toString();
                userOtp.push(newOtpData);
                setTimeout(() => {
                    userOtp.shift();
                }, 300000);

                //send otp
                var transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    requireTLS: true,
                    auth: {
                        user: 'chats.service24x7@gmail.com',
                        pass: 'chatsapp12345'
                    }
                });

                var mailOptions = {
                    from: 'chats.service24x7@gmail.com',
                    to: req.body.email,
                    subject: 'OTP for new registration',
                    text: 'Your OTP for new registration is ' + newOtpData.otp + " . It will expire in 5 min."
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log("Error 123 " + error);
                        res.statusCode = 400;
                        res.setHeader('Content-Type', 'application/json');
                        res.json({ "status": "Something went wrong! Please try again." });
                    } else {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json({ "status": "otp sent" });
                    }
                });

            }
        }, (err) => next(err))
        .catch((err) => next(err));
});

// confirm otp and register route
userRouter.post('/confirmRegisterOtp', function (req, res, next) {
    if (userOtp.length > 0) {
        let flag = false;
        userOtp.forEach(i => {
            if (i.otp == req.body.otp && i.email == req.body.email) {
                flag = true;
                var newuser = new User();
                newuser.username = req.body.username;
                newuser.email = req.body.email;
                newuser.password = bcrypt.hashSync(req.body.password, 10);
                newuser.profilePicUrl = req.body.profilePicUrl;
                newuser.save()
                    .then((user) => {
                        i.otp = "";
                        i.email = "";
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(user);
                    }, (err) => { console.log(err); next(err) });
            }
        });
        if (!flag) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({ 'res': 'Something went wrong! Please try again.' });
        }
    } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json({ 'res': 'Something went wrong! Please try again.' });
    }
});

// forgot password otp
userRouter.post('/sendPasswordResetLink', function (req, res, next) {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (user != null) {
                var newPasswordResetData = passwordResetData;
                newPasswordResetData.userId = user._id;
                newPasswordResetData.linkId = crypto.randomBytes(128).toString('hex');
                passwordResetLinks.push(newPasswordResetData);
                setTimeout(() => {
                    passwordResetLinks.shift();
                }, 600000);
                // password reset link
                var link = "https://sanket-chat-app.herokuapp.com/resetpassword/" + newPasswordResetData.linkId;
                //send otp
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'chats.service24x7@gmail.com',
                        pass: 'chatsapp12345'
                    }
                });

                var mailOptions = {
                    from: 'chats.service24x7@gmail.com',
                    to: req.body.email,
                    subject: 'Password reset link',
                    text: `Visit below link to reset you password 
                    ${link}
                    
                    This link will expire in 10 min.`
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        res.statusCode = 400;
                        res.setHeader('Content-Type', 'application/json');
                        res.json({ "status": "Something went wrong! Please try again." });
                    } else {
                    }
                });
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "status": "link sent" });
            }
            else {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "status": "Email doesn't exists" });
            }
        });
});

// reset password
userRouter.post('/resetPasswordLink/:id', function (req, res, next) {
    if (passwordResetLinks.length > 0) {
        let flag = false;
        passwordResetLinks.forEach(i => {
            if (i.linkId == req.params.id) {
                flag = true;
                User.updateOne({ _id: i.userId }, { $set: { password: bcrypt.hashSync(req.body.password, 10) } })
                    .then((user) => {
                        i.linkId = "";
                        i.userId = "";
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        res.json(user);
                    }, (err) => next(err))
                    .catch((err) => next(err));
            }
        });
        if (!flag) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.json({ 'res': 'No link found' });
        }
    } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json({ 'res': 'No link found' });
    }
});

// get all users
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

// search user using keyword
userRouter.get('/getSearchUsers/:keyword', function (req, res, next) {
    User.find({ username: { $regex: req.params.keyword, $options: 'i' } })
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
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "res": "No user found" });
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});

// update profile picture of user
userRouter.post('/profilePicupdate/:userId', function (req, res, next) {
    User.updateOne({ _id: req.params.userId }, { $set: { profilePicUrl: req.body.url } })
        .then((users) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(users);
        }, (err) => next(err))
        .catch((err) => next(err));
});

// add friend route
userRouter.post('/addFriend/:friendId', function (req, res, next) {
    User.findOne({ _id: req.params.friendId })
        .then((user1) => {
            if (user1 != null) {
                if (!user1.requests.find(i => i._id == req.body.userId) || user1.requests.length == 0) {
                    user1.requests.push(req.body.userId);
                    user1.save()
                        .then((user2) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(user2);
                        }, (err) => next(err));
                }
            } else {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.json({ "status": "User does not exists" });
            }
        }, (err) => next(err))
        .catch((err) => next(err));
});

// confirm friend route
userRouter.post('/confirmRequest/:userId', function (req, res, next) {
    User.findOne({ _id: req.params.userId })
        .then((user) => {
            if (user != null) {
                user.friends.unshift(req.body.friendId);
                user.requests = user.requests.filter(i => { return i._id != req.body.friendId });
                user.save()
                    .then((user) => {
                        User.findOne({ _id: req.body.friendId })
                            .then((user) => {
                                user.friends.unshift(req.params.userId);
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

// delete friend request route
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