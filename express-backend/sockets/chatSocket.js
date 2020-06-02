var express = require('express');

var onlineUsers = new Map();

module.exports = function (io) {
    io.on('connection', (socket) => {
        // console.log("connection"+ socket);
        var user = socket.handshake.query.user;

        if (onlineUsers.get(user)) {
            onlineUsers.delete(user);
            onlineUsers.set(user, socket.id);
        } else {
            onlineUsers.set(user, socket.id);
        }
        // console.log(onlineUsers);

        //send message
        socket.on('message', (msg) => {
            var friendSocketId = onlineUsers.get(msg.friend);
            if (friendSocketId) {
                socket.to(`${friendSocketId}`).emit('chatMsg', {
                    chatMsg: msg.messageBody,
                    sender: msg.sender,
                    friend: msg.friend
                });
            }
        });

        //send new friend request
        socket.on('friendRequest', (users) => {
            var friendSocketId = onlineUsers.get(users.friend._id);
            if (friendSocketId) {
                socket.to(`${friendSocketId}`).emit('newFriendRequest', {
                    sender: users.user
                });
            }
        });

        //confirm new friend requests
        socket.on('confirmFriendRequest', (users) => {
            var friendSocketId = onlineUsers.get(users.friend._id);
            if (friendSocketId) {
                // console.log("inside1");
                socket.to(`${friendSocketId}`).emit('confirmNewFriendRequest', {
                    sender: users.user
                });
            }
        });


        //check friend is online
        socket.on('checkOnline', (users) => {
            var friendSocketId = onlineUsers.get(users.friendId);
            if (friendSocketId) {
                socket.emit('isOnline', {
                    isOnline: true
                });
            } else {
                socket.emit('isOnline', {
                    isOnline: false
                });
            }
        });

        //remove user form onlineUsers on manual disconnect
        socket.on('offline', (user) => {
            onlineUsers.delete(user.userId);
        });
        //remove user form onlineUsers on disconnect
        socket.once('disconnect', () => {
            for (let [key, value] of onlineUsers) {
                if (value == socket.id) {
                    onlineUsers.delete(key);
                    break;
                }
            }
        });
    });
}
