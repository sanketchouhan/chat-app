import { Component, OnInit } from '@angular/core';
import { SocketService } from '../service/socket.service';
import { UserService } from '../service/user.service';
import { user } from '../models/user';
import { Router } from '@angular/router';
import { ChatService } from '../service/chat.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private _route: Router,
    private _socket: SocketService,
    private _userService: UserService,
    private _chatService: ChatService) { }

  user: user;

  ngOnInit() {

    //get global user
    this.user = this._userService.getUser();

    //set variable to show/hide chatroom
    if (window.innerWidth < 576) {
      this.showChatroom = false;
    }

    //set variable to show/hide profile dialog box
    this._userService.showDialog.subscribe((data) => {
      this.showProfileDialog = data;
    })
  }

  //keep track of active tab
  tabs: Array<boolean> = [true, false, false];

  showMenu: boolean = false;
  showProfileDialog: boolean = false;
  showChatroom: boolean = true;

  //open global user profile
  openProfileDailog() {
    this._userService.setProfileUser(this.user);
    this.showProfileDialog = true;
  }

  //logout from app
  logOut() {
    this._userService.setUser(null);
    this._chatService.setChatUser({
      _id: "",
      username: "",
      email: "",
      password: "",
      profilePicUrl: "",
      friends: null,
      requests: null
    });
    this._socket.disconnect(this.user._id);
    this._route.navigate(["/"]);
  }
}
