import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { $ } from 'protractor';
import * as $ from 'jquery';
import { UserService } from '../services/user.service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  // user:string="";
  constructor(private _route: Router, private route: ActivatedRoute, private _userService: UserService, private chatService: ChatService) {
    // this.route.queryParams.subscribe(params => {
    //   console.log(params);
    //   this.user = params['user'];
    //   console.log(this.user);
    // });
  }

  contacts: any = [];
  user = {
    username: "",
    password: ""
  }
  ngOnInit() {
    this.user = this._userService.getUser();
    console.log(JSON.parse(localStorage.getItem("isLoggedIn")));

    this.contacts = this.chatService.getContacts(this.user.username);

    this._userService.chatroomUser.emit(this.contacts[0]);
  }


  onClick(contact) {
    console.log(contact);
    this._userService.chatroomUser.emit(contact);
    if ($(window).outerWidth() < 576) {
      // this._route.navigate(["/chatroom"], { queryParams: contact });
      this._route.navigate(["/chatroom"]);
    } else {
      // this._route.navigate(["contacts/chatroom"], { queryParams: contact });
      this._route.navigate(["contacts/chatroom"]);
    }
    
  }

  openImgBox(contactPic){
    console.log(contactPic);
  }

}
