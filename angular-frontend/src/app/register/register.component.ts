import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { matchPassword } from '../shared/matchPassword.derictive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _userService: UserService, private _route: Router) { }

  ngOnInit() {
    // this._userService.window.emit("register");
  }

  registerForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(4)]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)]),
    confirmpassword: new FormControl('',[Validators.required,Validators.minLength(4)])
  },{ validators: matchPassword });

  onSubmit(){
    console.log(this.registerForm.value);
  }

  routeTo(){
    this._route.navigate(["home/login"]);
  }
}
