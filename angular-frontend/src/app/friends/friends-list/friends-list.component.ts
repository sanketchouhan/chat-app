import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { ChatService } from 'src/app/service/chat.service';
import { SocketService } from 'src/app/service/socket.service';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  user: user;
  contacts: any[];
  chatuser: user = {
    _id: "",
    username: "",
    password: "",
    email: "",
    profilePicUrl: "",
    friends: null,
    requests: null
  };

  constructor(private _route: Router,
    private _userService: UserService,
    private _chatService: ChatService,
    private _socket: SocketService
  ) { }
  ngOnInit() {

    //get global user
    this.user = this._userService.getUser();

    //update friends list
    this.contacts = this.user.friends;

    //update friends list on new confirm friend request
    this._socket.confirmNewFriendRequest.subscribe((data) => {
      // console.log("inside3");
      //check if the requester already in list
      if (!this.contacts.find(i => i._id == data._id)) {
        this.contacts.unshift(data);
        this.user.friends = this.contacts;
        this._userService.setUser(this.user);
      }
    });

    //update contacts with new messages
    this._socket.chatMessage.subscribe((data) => {
      if (data) {
        this.contacts.forEach(i => {
          if (i._id == data.sender) {
            i.new = true;
          }
        });
      }
    });
  }

  //on click go to chat window
  onClick(contact) {

    //remove the new message notification
    this.contacts.forEach(i => {
      if (i._id == contact._id) {
        delete i.new;
      }
    });

    //create chat user profile
    this.chatuser._id = contact._id;
    this.chatuser.email = contact.email;
    this.chatuser.username = contact.username;
    this.chatuser.profilePicUrl = contact.profilePicUrl;

    //emit chat user profile to chatoom window
    this._chatService.chatroomUser.emit(this.chatuser);

    //set chat user to chatService
    this._chatService.setChatUser(this.chatuser);

    //navigate to chatroom
    if (window.innerWidth < 576) {
      this._route.navigate(["/chatroom"]);
    }
  }

  //open friends profile
  openProfile(contact) {
    this._userService.setProfileUser(contact);
    this._userService.showDialog.emit(true);
  }

  // test purpose
  // contacts = [
  //   {
  //     "username": "Sanket",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   },
  //   {
  //     "username": "Riddhi",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   },
  //   {
  //     "username": "Sanket",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   },
  //   {
  //     "username": "Riddhi",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   },
  //   {
  //     "username": "Sanket",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   },
  //   {
  //     "username": "Riddhi",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   },
  //   {
  //     "username": "Sanket",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   },
  //   {
  //     "username": "Riddhi",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   },
  //   {
  //     "username": "Sanket",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   },
  //   {
  //     "username": "Riddhi",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   },
  //   {
  //     "username": "Sanket",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   },
  //   {
  //     "username": "Riddhi",
  //     "profilePicUrl": "../../assets/images/defaultProfile.png"
  //   }
  // ]

}
