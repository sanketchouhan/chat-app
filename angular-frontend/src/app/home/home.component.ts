import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // registerWindow = false;
  loginWindow = true;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.window.subscribe((data) => {
    //   console.log(data);
    //   if (data == "register")
    //     this.loginWindow = false;
    // });
  }

  // changeWindow() {
  //   this.loginWindow = !this.loginWindow;
  // }

}
