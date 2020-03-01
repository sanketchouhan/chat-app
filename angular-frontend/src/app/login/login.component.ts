import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import * as io from 'socket.io-client';
import * as $ from 'jquery';
import { UserService } from '../services/user.service';
import { user } from '../models/user'
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // socket: any;
  constructor(private _route: Router, private _userService: UserService, private _chatService: ChatService) {
    // this.socket = io('http://localhost:3000');

    // this.socket.on('connect', function () {
    //   console.log("connection made");
    // });

    // this.socket.on('newmsg', (data) => {
    //   console.log(data);
    // });
  }

  ngOnInit() {
  }
  status: string;

  user = {
    username: "",
    password: ""
  };


  login() {
    this._chatService.overlay.emit(true);
    this._userService.loginUser(this.user).subscribe(
      (data: any) => {
        //when login successful
        this._chatService.overlay.emit(false);
        if (data.username) {
          this._userService.setUser(data);
          this._chatService.setChatUser(data.friends[0]);
          localStorage.setItem("LoggedInUser", JSON.stringify(data));
          this._route.navigate(["contacts"]);
        } else {
          this.status=data.status;
        }
      },
      err => {
        this._chatService.overlay.emit(false);
        // console.log(err);
      }
    )
  }

  routeTo() {
    this._route.navigate(["home/register"]);
  }
}
