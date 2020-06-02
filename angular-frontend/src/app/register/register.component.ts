import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ChatService } from '../service/chat.service';
import { user } from '../models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { matchPassword } from '../shared/matchPassword.derictive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: user = {
    _id: "",
    username: "",
    password: "",
    email: "",
    profilePicUrl: "../../assets/images/defaultProfile.png",
    friends: [],
    requests: [],
  };

  status: string;

  constructor(private _userService: UserService, private _route: Router, private _chatService: ChatService) { }

  ngOnInit() {
  }

  //register form controls
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(4)])
  }, { validators: matchPassword });


  //on register form submit
  onSubmit(value) {
    this._chatService.overlay.emit(true);
    this.user.username = value.username;
    this.user.password = value.password;
    this.user.email = value.email;
    this._userService.registerUser({ email: value.email }).subscribe((data: any) => {
      this._chatService.overlay.emit(false);
      if (data) {
        this._userService.setLocalRegisterUser(this.user);
        this._route.navigate(["/register/confirmotp"]);
      }else{
        this.status = "Something went wrong! Please try again";
      }
    },
      (err) => {
        this.status = err.error.status;
        this._chatService.overlay.emit(false);
      });
  }

}
