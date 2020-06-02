import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router, private _userService: UserService, private _chatService: ChatService) { }

  ngOnInit() {
  }

  status: string;

  user = {
    email: "",
    password: ""
  };


  //login user
  login() {
    this._chatService.overlay.emit(true);
    this._userService.loginUser(this.user).subscribe(
      (data: any) => {
        //when login successful
        this._chatService.overlay.emit(false);
        if (data.username) {
          this._userService.setUser(data);
          this._route.navigate(["friends"]);
        } else {
          this.status = "Something went wrong! Please try again";
        }
      },
      err => {
        this.status = err.error.status;
        this._chatService.overlay.emit(false);
      }
    )
  }

}
