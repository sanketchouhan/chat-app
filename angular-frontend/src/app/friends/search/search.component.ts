import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/app/models/user';
import { SocketService } from 'src/app/service/socket.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _userService: UserService, private _chatService: ChatService, private _socket: SocketService) { }

  user: user;
  searchItems: any[];

  ngOnInit() {

    //get global user
    this.user = this._userService.getUser();
  }

  searchText: string = "";

  //on keyup event on search box
  search($event) {
    $event.preventDefault();
    if (this.searchText.length > 0) {

      //search users 
      this._userService.searchUsers(this.searchText).subscribe((data: any) => {

        //filter global user and fliend lists
        this.searchItems = data.filter(i => {
          let item = i;
          if (this.user.friends.find(i => i._id == item._id) || i._id == this.user._id) {
            return false;
          } else {
            return true;
          }
        });
      }, (err) => {
      });
    } else {
      this.searchItems = [];
    }

  }

  //on sending friend request
  addFriend(item) {

    this._chatService.overlay.emit(true);

    //update database
    this._userService.addFriend({ "userId": this.user._id }, item._id).subscribe((data) => {
      this._chatService.overlay.emit(false);

      //remove requested user from search list 
      this.searchItems = this.searchItems.filter(i => { return i._id != item._id });

      //send notificaton to friend
      this._socket.notifyAddFriend(this.user, item);
    }, (err) => {
      this._chatService.overlay.emit(false);
    });

  }

  //show profile
  showProfile(item) {
    // console.log(item);
    this._userService.setProfileUser(item);
    this._userService.showDialog.emit(true);
  }

  
  // test purpose
  // searchItems = [
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
