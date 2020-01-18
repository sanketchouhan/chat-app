import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import * as io from 'socket.io-client';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  chatUser: string = "";
  picUrl: string = "";
  socket: any;
  user: string;
  chatRoomName: string;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    // this.route.queryParams.subscribe(params => {
    // console.log(params);
    // this.chatUser = params['user'];
    // this.picUrl = params['pic'];
    // console.log(this.chatUser);
    // console.log(this.picUrl);
    // });

  }

  ngOnInit() {

    this.userService.chatroomUser.subscribe((data) => {
      console.log(data);
      this.chatUser = data.user;
      this.picUrl = data.pic;
    });

    console.log("initialize");
    this.user = this.userService.getUser().username;
    this.chatRoomName = this.user.toLowerCase() > this.chatUser.toLowerCase() ? this.user.toLowerCase() + "." + this.chatUser.toLowerCase() : this.chatUser.toLowerCase() + "." + this.user.toLowerCase();
    // console.log(this.chatRoomName);
    // var room = this.chatRoomName;
    this.socket = io('/');
    // var socketOnInit = this.socket;
    this.socket.on('connect', () => {
      console.log("connection made");
      this.socket.emit("joinPC", { room: this.chatRoomName });

    });

    this.socket.on('chatMsg', (data) => {
      // console.log(data);
      if (data.sender != this.user) {
        this.messages.unshift({
          "user": "user2",
          "msg": data.chatMsg
        })
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
        text: this.textMsg,
        room: this.chatRoomName,
        sender: this.user
      });
      this.messages.unshift({
        "user": "user1",
        "msg": this.textMsg
      })
      this.textMsg = "";
      // this.do_resize($('#textMsg'));
    }
  }


  messages = []

}
