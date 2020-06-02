const mongoose = require("mongoose");

var usersSchema = new mongoose.Schema({
    username: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    profilePicUrl:{
        type: String,
        default: ""
    },
    friends:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    requests:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
});

var Users = mongoose.model("User", usersSchema);
module.exports = Users;