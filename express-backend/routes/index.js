var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', {test:'this is index ejs'});
// });

module.exports = function(io){
    // io.on('connection',(socket)=>{
    //     console.log("connection"+ socket);

    //     socket.on('message',(msg)=>{
    //         console.log(msg.text);
    //         io.emit('newmsg',{
    //             text:msg.text
    //         })
    //     })
    // });

    router.get('/', function(req, res, next) {
        res.render('index', {test:'this is index ejs'});
    });

    return router;
};