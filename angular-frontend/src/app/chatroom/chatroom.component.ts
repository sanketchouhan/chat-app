import { Component, OnInit } from '@angular/core';
import { user } from '../models/user';
import { UserService } from '../service/user.service';
import { ChatService } from '../service/chat.service';
import { SocketService } from '../service/socket.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  messages = [];
  chatuser: user = {
    _id: "",
    username: "",
    password: "",
    email: "",
    profilePicUrl: "",
    friends: null,
    requests: null
  };
  user: user;
  chatRoomName: string;
  textMsg: string = '';
  online: boolean = false;

  constructor(private _userService: UserService, private _chatService: ChatService, private _socket: SocketService) { }

  ngOnInit() {

    //  get global user
    this.user = this._userService.getUser();

    //get chat user from chatService
    let chatuser = this._chatService.getChatUser();
    if (chatuser.username.length > 0) {
      this.chatuser = chatuser;
    } else {
      if (this.user.friends.length > 0) {
        this.chatuser = this.user.friends[0];
      } else {
        this.chatuser._id = "000000" //random id
        this.chatuser.username = "Unknown";
        this.chatuser.profilePicUrl = "../../assets/images/defaultProfile.png";
      }
    }

    //get chat user from Event emitter chatUser
    this._chatService.chatroomUser.subscribe((data) => {
      this.chatuser = data;
      this.messages = [];
      this.createRoomNameAndGetMessages();
    });

    //create room id and fetch messages
    this.createRoomNameAndGetMessages();

    //check online
    setInterval(() => {
      this._socket.checkOnline(this.user._id, this.chatuser._id);
    }, 5000);

    //update messages array with incoming chat message
    this._socket.chatMessage.subscribe((data) => {
      if (data.sender != this.user._id && data.sender == this.chatuser._id) {
        this.messages.unshift({
          "sender": data.sender,
          "messageBody": data.chatMsg
        })
      }
    });

    //set if friend is online
    this._socket.online.subscribe((data) => {
      this.online = data;
    });

  }

  //create room id and fetch messages
  createRoomNameAndGetMessages() {

    //create room id
    this.chatRoomName = this.user._id > this.chatuser._id ? this.user._id + "." + this.chatuser._id : this.chatuser._id + "." + this.user._id;

    //get messages for this room id
    this._chatService.getMessages(this.chatRoomName).subscribe((data: any) => {
      if (data) {
        this.messages = data.messages;
      }
    });
  }

  //on chat message send
  onSubmit() {
    if (this.textMsg.trim().length > 0) {

      //update messages array
      this.messages.unshift({
        "sender": this.user._id,
        "messageBody": this.textMsg
      });

      //send message to socketIO
      this._socket.sendMessage(this.textMsg, this.user._id, this.chatuser._id);

      //send message to database
      this._chatService.sendText(this.chatRoomName, { "sender": this.user._id, "messageBody": this.textMsg }).subscribe((data) => {

        //bring this chat user above in friend list
        let friends = this.user.friends.filter(i => i._id != this.chatuser._id);
        friends.unshift(this.chatuser);
        this.user.friends = friends;
        this._userService.setUser(this.user);
      });

      this.textMsg = "";
    }

  }

  // messages = [
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },

  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   },
  //   {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   }, {
  //     sender: '1',
  //     messageBody: 'hi'
  //   },
  //   {
  //     sender: '2',
  //     messageBody: 'hi hello'
  //   }
  // ]


}
