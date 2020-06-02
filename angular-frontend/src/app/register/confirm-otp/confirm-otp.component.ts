import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-confirm-otp',
  templateUrl: './confirm-otp.component.html',
  styleUrls: ['./confirm-otp.component.css']
})
export class ConfirmOtpComponent implements OnInit {

  constructor(private _userService: UserService, private _route: Router, private _chatService: ChatService) { }

  otp: string = '';
  seconds: number = 60;
  errorMessage: string = '';

  user = {
    _id: "",
    username: "",
    password: "",
    email: "",
    profilePicUrl: "../../assets/images/defaultProfile.png",
    friends: [],
    requests: [],
    otp: ''
  };


  ngOnInit() {

    //register user local
    var user = this._userService.getLocalRegisterUser();
    this.user.username = user.username;
    this.user.email = user.email;
    this.user.password = user.password;

    //timer
    setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      }
    }, 1000);
  }


  //on confirm otp
  confirmOtp() {
    if (this.otp.length == 6) {
      this._chatService.overlay.emit(true);
      this.user.otp = this.otp;
      this._userService.confirmOtpAndRegister(this.user).subscribe((data: any) => {
        this._chatService.overlay.emit(false);
        if (data.username) {
          this._userService.setUser(data);
          this._route.navigate(["/friends"]);
        }
      }, err => {
        this.errorMessage = err.error.status;
        this._chatService.overlay.emit(false);
      });
    } else {
      this.errorMessage = "OTP must be 6 digits";
    }
  }
}
