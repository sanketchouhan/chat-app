import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import * as io from 'socket.io-client';
import { UserService } from '../services/user.service';
import { ChatService } from '../services/chat.service';
import { user } from '../models/user';

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
    profilePicUrl: "",
    friends: null,
    requests: null
  };
  socket: any;
  user: user;
  chatRoomName: string;

  constructor(private _userService: UserService, private _chatService: ChatService) {
  }

  ngOnInit() {
    //initialise socket.io
    this.socket = io('/');

    this.user = this._userService.getUser();
    this.chatuser = this._chatService.getChatUser();

    // this._userService.getAllUser().subscribe((data) => {
    //   this.chatuser = data[0];
    // }, (err) => {
    //   console.log(err);
    // });


    //chat room user event emitter variable
    this._chatService.chatroomUser.subscribe((data) => {
      this.chatuser = data;
      this.chatRoomName = this.user._id > this.chatuser._id ? this.user._id + "." + this.chatuser._id : this.chatuser._id + "." + this.user._id;
      console.log(this.chatRoomName);
      this.socket.emit("joinPC", { room: this.chatRoomName });
      this._chatService.getMessages(this.chatRoomName).subscribe((data: any) => {
        if (data) {
          console.log(data.messages);
          this.messages = data.messages;
          this.messages.reverse();
        } else {
          this.messages = [];
        }
      });
    });

    console.log("initialize");
    this.chatRoomName = this.user._id > this.chatuser._id ? this.user._id + "." + this.chatuser._id : this.chatuser._id + "." + this.user._id;
    this._chatService.getMessages(this.chatRoomName).subscribe((data: any) => {
      if (data) {
        console.log(data.messages);
        this.messages = data.messages;
        this.messages.reverse();
      } else {
        this.messages = [];
      }
    });
    

    // client socket.io initialization
    this.socket.on('connect', () => {
      console.log("connection made");
      this.socket.emit("joinPC", { room: this.chatRoomName });
    });

    this.socket.on('chatMsg', (data) => {
      if (data.sender != this.user._id) {
        this.messages.unshift({
          "sender": data.sender,
          "messageBody": data.chatMsg
        })
      } else {
        // this.messages.unshift({
        //   "user": "user1",
        //   "msg": this.textMsg
        // })
      }
    });
  }

  rows: number = 1;
  // do_resize(textbox) {
  //   console.log(textbox);
  //   // let maxrows: number = 3;
  //   // let txt = textbox;
  //   let cols: number = 34;

  //   // var arraytxt = txt.split('\n');
  //   // let rows: number = arraytxt.length;

  //   // for (let i = 0; i < arraytxt.length; i++) {
  //   //   rows += arraytxt[i].length / cols;
  //   // }
  //   if (textbox.length > cols) {
  //     if ((textbox.length % cols) > 0) {
  //       if (this.rows < 3)
  //         this.rows++;
  //     }
  //   }

  // }

  textMsg: string = "";

  onSubmit() {
    // console.log(this.textMsg);
    if (this.textMsg.trim().length > 0) {
      this.socket.emit('message', {
        room: this.chatRoomName,
        messageBody: this.textMsg,
        sender: this.user._id
        // receiver: this.chatuser._id
      });
      this.messages.unshift({
        "sender": this.user._id,
        "messageBody": this.textMsg
      })
      
      this._chatService.sendText(this.chatRoomName, { "sender": this.user._id, "messageBody": this.textMsg }).subscribe((data) => {
        console.log(data);
      });
      this.textMsg = "";
    }
  }

}
