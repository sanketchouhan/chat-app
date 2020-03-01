const express = require('express');
// const bodyparser = require('body-parser');
// const ejs = require('ejs');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const mongoose = require("./model/db");


var app = express();

var server = http.createServer(app);
const io = socketIO(server);

var userRouter = require('./routes/userRouter');
var chatRouter = require('./routes/chatRouter');
var chatSocket = require('./sockets/chatSocket')(io);

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}

server.listen(port, function () {
    console.log("server listening on port " + port);
});

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public/chat-app/')));

app.use('/user', userRouter);
app.use('/chats', chatRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/chat-app/","index.html"));
});


// app.use('/', indexRouter);
// app.use('/users', userRouter);
// app.use('/users', usersRouter);
// app.use('/dishes', dishRouter);
// app.use('/promotions', promoRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({'error':"ERROR"});
});