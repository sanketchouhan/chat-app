const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ChatAppDB", { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log("DB connection successful");
    } else {
        console.log("DB connection error " + err);
    }
});