import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { matchPassword } from '../shared/matchPassword.derictive';
import { Router } from '@angular/router';
import { user } from '../models/user';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: user = {
    _id:"",
    username: "",
    password: "",
    profilePicUrl: "../../assets/images/defaultProfile.png",
    friends: [],
    requests: [],
  };

  status:string;
  
  constructor(private _userService: UserService, private _route: Router, private _chatService: ChatService) { }

  ngOnInit() {
  }

  registerForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(4)]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)]),
    confirmpassword: new FormControl('',[Validators.required,Validators.minLength(4)])
  },{ validators: matchPassword });

  onSubmit(value){
    this._chatService.overlay.emit(true);
    this.user.username=value.username;
    this.user.password=value.password;
    // console.log(value);
    // console.log(this.user);
    this._userService.registerUser(this.user).subscribe((data:any)=>{
      this._chatService.overlay.emit(false);
      if(data.username){
        this._userService.setUser(data);
        localStorage.setItem("LoggedInUser", JSON.stringify(data));
        this._route.navigate(["contacts"]);
      }else{
        this.status=data.status;
      }
    },
    (err)=>{
      this._chatService.overlay.emit(false);
      // console.log(err);
    });
  }

  routeTo(){
    this._route.navigate(["home/login"]);
  }
}
