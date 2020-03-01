import { Injectable, EventEmitter } from '@angular/core';
import { user } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  contacts = [
    {
      "user": "Sanket",
      "pic": "../../assets/images/s.jpg"
    },
    {
      "user": "Riddhi",
      "pic": "../../assets/images/r.jpg"
    },
    {
      "user": "Sanket",
      "pic": "../../assets/images/s.jpg"
    },
    {
      "user": "Riddhi",
      "pic": "../../assets/images/r.jpg"
    },
    {
      "user": "Sanket",
      "pic": "../../assets/images/s.jpg"
    },
    {
      "user": "Riddhi",
      "pic": "../../assets/images/r.jpg"
    },
    {
      "user": "Sanket",
      "pic": "../../assets/images/s.jpg"
    },
    {
      "user": "Riddhi",
      "pic": "../../assets/images/r.jpg"
    },
    {
      "user": "Sanket",
      "pic": "../../assets/images/s.jpg"
    },
    {
      "user": "Riddhi",
      "pic": "../../assets/images/r.jpg"
    },
    {
      "user": "Sanket",
      "pic": "../../assets/images/s.jpg"
    },
    {
      "user": "Riddhi",
      "pic": "../../assets/images/r.jpg"
    }
  ]

  chatuser: user = {
    _id: "",
    username: "",
    password: "",
    profilePicUrl: "",
    friends: null,
    requests: null
  };

  chatroomUser = new EventEmitter();  //chatroom user details

  overlay = new EventEmitter(); //overlay show/hide variable

  constructor(private http:HttpClient) { 
  }

  // getContacts(username) {
  //   return this.contacts.filter(contact => contact.user.toLowerCase() != username.toLowerCase());
  // }

  sendText(chatRoomName, message) {
    return this.http.post("/chats/"+chatRoomName , message);
  }
  getMessages(chatRoomName){
    return this.http.get("/chats/"+chatRoomName);
  }

  setChatUser(chatuser) {
    this.chatuser = chatuser;
  }

  getChatUser() {
    return this.chatuser;
  }

}
