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

  user: user = {
    username: "",
    password: ""
  }


  login() {
    Swal.fire({
      title: 'Logging in...',
      showConfirmButton: false,
      width: '250px',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });
    this._userService.loginUser(this.user).subscribe(
      (data) => {
        //when login successful
        this._userService.setUser(this.user);
        localStorage.setItem("isLoggedIn", JSON.stringify(this.user));
        if ($(window).outerWidth() < 576) {
          this._route.navigate(["contacts"]);
        }else{
          this._route.navigate(["contacts/chatroom"]);
        }
      },
      err => {
        setTimeout(() => {
          this._userService.setUser(this.user);
          localStorage.setItem("isLoggedIn", JSON.stringify(this.user));
          if ($(window).outerWidth() < 576) {
            this._route.navigate(["contacts"]);
          }else{
            this._route.navigate(["contacts/chatroom"]);
          }
          Swal.close();
        }, 3000);


      }
    )
    // Make sure the client is loaded and sign-in is complete before calling this method.

  }

  // loadClient() {
  //   gapi.client.setApiKey("YOUR_API_KEY");
  //   return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
  //     .then(function () { console.log("GAPI client loaded for API"); },
  //       function (err) { console.error("Error loading GAPI client for API", err); });
  // }

  // execute(channel) {
  //   console.log(channel);
  //   this._userService.getPlayListForChannel(channel).subscribe(data=>console.log(data));
  // return gapi.client.youtube.search.list({
  //   "part": "snippet",
  //   "maxResults": 25,
  //   "q": "surfing"
  // })
  //   .then(function (response) {
  //     // Handle the results here (response.result has the parsed body).
  //     console.log("Response", response);
  //   },
  //     function (err) { console.error("Execute error", err); });
  // }


  routeTo() {
    this._route.navigate(["home/register"]);
  }
}
