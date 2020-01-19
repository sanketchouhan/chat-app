import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import * as io from 'socket.io-client';
import * as $ from 'jquery';
import { UserService } from '../services/user.service';
import { user } from '../models/user'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // socket: any;
  constructor(private _route: Router, private _userService: UserService) {
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
    this._userService.loginUser(this.user).subscribe(
      (data: any) => {
        //when login successful
        if (data.username) {
          this._userService.setUser(data);
          localStorage.setItem("LoggedInUser", JSON.stringify(data));
          this._route.navigate(["contacts"]);
        } else {
          this.status=data.status;
        }
      },
      err => {
        console.log(err);
      }
    )
    // Make sure the client is loaded and sign-in is complete before calling this method.
    // this._route.navigate(["contacts"]);
  }

  routeTo() {
    this._route.navigate(["home/register"]);
  }
}
