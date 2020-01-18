var express = require('express');

module.exports = function(io){
    io.on('connection',(socket)=>{
        console.log("connection"+ socket);

        socket.on("joinPC",(chatRoom)=>{
            // console.log(chatRoom.room);
            socket.join(chatRoom.room);
        });
        socket.on('message',(msg)=>{
            // console.log(msg);
            socket.to(msg.room).emit('chatMsg',{
            chatMsg:msg.text,
            sender:msg.sender
            });
        });
    });
}