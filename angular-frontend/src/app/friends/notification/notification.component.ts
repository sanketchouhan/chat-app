import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { ChatService } from 'src/app/service/chat.service';
import { SocketService } from 'src/app/service/socket.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private _userService: UserService, private _chatService: ChatService, private _socket: SocketService) { }

  user: user;
  requests: any[];

  ngOnInit() {

    //get global user
    this.user = this._userService.getUser();

    //set requests
    this.requests = this.user.requests;

    //check for any new incoming requests
    this._socket.newFriendRequest.subscribe((data) => {
      if (!this.requests.find(i => i._id == data._id)) {
        this.requests.unshift(data);
        this.user.requests = this.requests;
        this._userService.setUser(this.user);
      }
    });
  }

  //on conform friend request
  confirmRequest(request) {

    // this._socket.confirmFriendRequest(this.user, request);
    this._chatService.overlay.emit(true);

    //update database
    this._userService.confirmRequest(this.user._id, { "friendId": request._id }).subscribe((data) => {
      this._chatService.overlay.emit(false);

      //remove friend from requests and add to friend list
      this.requests = this.requests.filter(i => { return i._id != request._id; });
      this.user.requests = this.requests;
      this.user.friends.unshift(request);
      this._userService.setUser(this.user);
      

      //send notification to friend
      this._socket.confirmFriendRequest(this.user, request);
      console.log("send socket");

    }, (err) => {
      this._chatService.overlay.emit(false);
    });

  }

  //delete friend requests
  deleteRequest(request) {
    this._chatService.overlay.emit(true);

    //update database
    this._userService.deleteRequest(this.user._id, { "friendId": request._id }).subscribe((data) => {
      this._chatService.overlay.emit(false);

      //remove from requests list
      this.requests = this.requests.filter(i => { return i._id != request._id; });
      this.user.requests = this.requests;
      this._userService.setUser(this.user);
    }, (err) => {
      this._chatService.overlay.emit(false);
    });
  }

  //show profile 
  showProfile(request) {
    this._userService.setProfileUser(request);
    this._userService.showDialog.emit(true);
  }


  
  // test purpose
  // requests = [
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
