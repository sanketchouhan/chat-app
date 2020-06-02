import { Injectable, EventEmitter } from '@angular/core';
import { user } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  chatroomUser = new EventEmitter();  //chatroom user details

  overlay = new EventEmitter(); //overlay show/hide variable

  // user
  chatuser: user = {
    _id: "",
    username: "",
    email: "",
    password: "",
    profilePicUrl: "",
    friends: null,
    requests: null
  };

  sendText(chatRoomName, message) {
    return this.http.post("/chats/" + chatRoomName, message);
  }


  getMessages(chatRoomName) {
    return this.http.get("/chats/" + chatRoomName);
  }

  // set chat user
  setChatUser(chatuser) {
    this.chatuser = chatuser;
  }

  // get chat user
  getChatUser() {
    return this.chatuser;
  }


}
