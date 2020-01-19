import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { $ } from 'protractor';
import * as $ from 'jquery';
import { UserService } from '../services/user.service';
import { ChatService } from '../services/chat.service';
import { user } from '../models/user';
import {MatDialog} from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: any = [];
  user: user;
  constructor(private _route: Router, private _userService: UserService, private _chatService: ChatService, public dialog: MatDialog) {
  }


  ngOnInit() {
    // this.user = this._userService.getUser();
    // console.log(JSON.parse(localStorage.getItem("LoggedInUser")));
    // this.contacts = this._userService.getUser().friends;

    // this.contacts = this._chatService.getContacts(this.user.username);

    //test purpose
    this._userService.getAllUser().subscribe((data) => {
      this.contacts = data;
    },(err)=>{
      console.log(err);
    });

    // this._userService.chatroomUser.emit(this.contacts[0]);
    // console.log(this.contacts[0]);
  }


  onClick(contact:user) {
    console.log(contact);
    this._chatService.chatroomUser.emit(contact);
    this._chatService.setChatUser(contact);
    if ($(window).outerWidth() < 576) {
      this._route.navigate(["/chatroom"]);
    }
  }

  openImgBox(contactPic) {
    console.log(contactPic);
  }


  openProfileDailog(){
    const dialogRef = this.dialog.open(ProfileComponent, {
      height: '80%',
      width: '20rem'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
