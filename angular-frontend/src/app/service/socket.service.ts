import { Injectable, EventEmitter } from '@angular/core';
import * as io from 'socket.io-client';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;
  online = new EventEmitter();
  chatMessage = new EventEmitter();
  newFriendRequest = new EventEmitter();
  confirmNewFriendRequest = new EventEmitter();

  constructor(private _userService: UserService, ) {
    //initialise socket.io
    // this.socket = io('/');
    if (this._userService.getUser()) {
      this.socket = io.connect(window.location.origin, { query: 'user=' + this._userService.getUser()._id });
    }
    // this.socket = io.connect('/', { query: 'user=' + this._userService.getUser()._id });

    // chat message
    this.socket.on('chatMsg', (data) => {
      this.chatMessage.emit(data);
    });

    // receive friend request
    this.socket.on('newFriendRequest', (data) => {
      let user = this._userService.getUser();
      if (!user.requests.find(i => i._id == data.sender._id)) {
        user.requests.unshift(data.sender);
        this._userService.setUser(user);
      }
      // user.requests.unshift(data.sender)
      // this._userService.setUser(user);
      this.newFriendRequest.emit(data.sender);
    });

    // receive confirm friend request
    this.socket.on('confirmNewFriendRequest', (data) => {
      let user = this._userService.getUser();
      // console.log("inside2");
      if (!user.friends.find(i => i._id == data.sender._id)) {
        user.friends.unshift(data.sender);
        this._userService.setUser(user);
        // console.log("friend added");
      }
      // user.friends.unshift(data.sender)
      // this._userService.setUser(user);
      this.confirmNewFriendRequest.emit(data.sender);
    });

    // both friend online
    this.socket.on('isOnline', (data) => {
      // console.log("check friend socket" + data.isOnline);
      // if (data.isOnline) {
      this.online.emit(data.isOnline);
      // }
    });

    // anyone going offline
    // this.socket.on('offline', (data) => {
    //   if (data.offline) {
    //     this.online.emit(false);
    //   }
    // });
  }

  // join socket room
  // joinRoom(room) {
  //   this.socket.emit("joinPC", {
  //     room: room
  //   });
  // }

  // send messages
  sendMessage(message, userId, friendId) {
    this.socket.emit('message', {
      // room: room,
      messageBody: message,
      sender: userId,
      friend: friendId
    });
  }

  // check friend is online
  checkOnline(userId, friendId) {
    // console.log("check online from chatroom")
    this.socket.emit('checkOnline', {
      userId: userId,
      friendId: friendId
    });
  }

  // inform going offline
  disconnect(userId) {
    this.socket.emit('offline', {
      userId: userId
    });
  }

  // add friend
  notifyAddFriend(user, friend) {
    this.socket.emit('friendRequest', {
      friend: friend,
      user: user
    });
  }

  // confirm friend
  confirmFriendRequest(user, friend) {
    this.socket.emit('confirmFriendRequest', {
      friend: friend,
      user: user
    });
  }

}
