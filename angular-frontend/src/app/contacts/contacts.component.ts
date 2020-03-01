import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { $ } from 'protractor';
import * as $ from 'jquery';
import { UserService } from '../services/user.service';
import { ChatService } from '../services/chat.service';
import { user } from '../models/user';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  tabs: Array<boolean> = [true, false, false];
  searchItems: any = [];
  contacts: any = [];
  requests: any = [];
  searchText: string = "";
  user: user;
  constructor(private _route: Router,
    private _userService: UserService,
    private _chatService: ChatService,
    public dialog: MatDialog) {
  }


  ngOnInit() {
    this.user = this._userService.getUser();
    this.contacts = this.user.friends;
    this.requests = this.user.requests;
    // console.log(JSON.parse(localStorage.getItem("LoggedInUser")));
    // this.contacts = this._userService.getUser().friends;

  }

  // for chatroom user update
  onClick(contact: user) {
    // console.log(contact);
    this._chatService.chatroomUser.emit(contact);
    this._chatService.setChatUser(contact);
    if ($(window).outerWidth() < 576) {
      this._route.navigate(["/chatroom"]);
    }
  }

  // search logic
  search($event) {
    $event.preventDefault();
    if (this.searchText.length > 0) {
      this._userService.searchUsers(this.searchText).subscribe((data: any) => {
        // console.log(data);
        this.searchItems = data.filter(i => {
          let item = i;
          if (this.user.friends.find(i => i._id == item._id) || i._id == this.user._id) {
            return false;
          } else {
            return true;
          }
        });
      }, (err) => {
        // console.log(err);
      });
    } else {
      this.searchItems = [];
    }
  }

  // add friend logic 
  addFriend(item) {
    //   console.log(item);
    //   console.log(this.user._id);
    this._chatService.overlay.emit(true);
    this._userService.addFriend({ "userId": this.user._id }, item._id).subscribe((data) => {
      this._chatService.overlay.emit(false);
      // console.log(data);
    }, (err) => {
      this._chatService.overlay.emit(false);
    });
  }


  // confirm requests logic 
  confirmRequest(request) {
    this._chatService.overlay.emit(true);
    this._userService.confirmRequest(this.user._id, { "friendId": request._id }).subscribe((data) => {
      this._chatService.overlay.emit(false);
      // console.log(data);
      this.requests = this.requests.filter(i => { return i._id != request._id; });
      // this.contacts.push(data);
      this.user.requests = this.requests;
      this.user.friends.push(request);
      this._userService.setUser(this.user);
    }, (err) => {
      this._chatService.overlay.emit(false);
    });
  }


  //delete requests logic
  deleteRequest(request) {
    this._chatService.overlay.emit(true);
    this._userService.deleteRequest(this.user._id, { "friendId": request._id }).subscribe((data) => {
      this._chatService.overlay.emit(false);
      // console.log(data);
      this.requests = this.requests.filter(i => { return i._id != request._id; });
      this.user.requests = this.requests;
      this._userService.setUser(this.user);
    }, (err) => {
      this._chatService.overlay.emit(false);
    });
  }






  openImgBox(contactPic) {
    console.log(contactPic);
  }

  // profile dailog box
  openProfileDailog() {
    const dialogRef = this.dialog.open(ProfileComponent, {
      height: '80%',
      width: '20rem'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
