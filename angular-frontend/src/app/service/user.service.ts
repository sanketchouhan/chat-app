import { Injectable, EventEmitter } from '@angular/core';
import { user } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // show profile dialog
  showDialog = new EventEmitter();

  //current global user
  user: user;

  // local register user
  localRegisterUser: user;
  setLocalRegisterUser(user) {
    this.localRegisterUser = user;
  }
  getLocalRegisterUser() {
    return this.localRegisterUser;
  }

  // local profile user
  profileUser:user;
  setProfileUser(user){
    this.profileUser=user;
  }
  getProfileUser(){
    return this.profileUser;
  }

  constructor(private http: HttpClient, private _route: Router, private _chatService: ChatService) {
  }

  //login user
  loginUser(user) {
    return this.http.post("/user/login", user);
  }

  //register new user
  registerUser(email) {
    return this.http.post("/user/register", email);
  }
  // confirm register otp
  confirmOtpAndRegister(user) {
    return this.http.post("/user/confirmRegisterOtp", user);
  }

  // send reset password link
  sendPasswordResetLink(email) {
    return this.http.post("/user/sendPasswordResetLink", email);
  }
  // reset password
  resetPassword(id, password) {
    return this.http.post("/user/resetPasswordLink/" + id, password);
  }

  //upload user profile pic url
  updateProfilePic(userId, profilePicUrl) {
    return this.http.post("/user/profilePicupdate/" + userId, profilePicUrl);
  }

  // search users
  searchUsers(keyword) {
    return this.http.get("/user/getSearchUsers/" + keyword);
  }

  //add friend
  addFriend(userId, friendId) {
    return this.http.post("/user/addFriend/" + friendId, userId);
  }

  // confirm friend requests
  confirmRequest(userId, friendId) {
    return this.http.post("/user/confirmRequest/" + userId, friendId);
  }

  // delete friend request
  deleteRequest(userId, friendId) {
    return this.http.post("/user/deleteRequest/" + userId, friendId);
  }

  //set current global user
  setUser(user) {
    this.user = user;
    localStorage.setItem("LoggedInUser", JSON.stringify(this.user));
  }

  //get current global user
  getUser() {
    if (!this.user) {
      if (localStorage.getItem("LoggedInUser") === null) {
        this._route.navigate(["/"]);
      }
      else {
        this.setUser(JSON.parse(localStorage.getItem("LoggedInUser")));
        return this.user;
      }
    }
    else {
      return this.user;
    }

    // localStorage.setItem("LoggedInUser", JSON.stringify({
    //   username: "sanket",
    //   email: "sanket.chouhan555@gmail.com",
    //   password: "$2b$10$ywg8b.inLrA1UKb/5xq3v.c0mviPvWZ7UYk0iEKozhCZcT9nQ8CxS",
    //   profilePicUrl: "https://firebasestorage.googleapis.com/v0/b/chatapp-9fa60.appspot.com/o/chat-app-profile-pics%2F5e5be574eedfd73d14403ec6?alt=media&token=ad8681dc-a478-4e97-82b9-e4d8b12459d5",
    //   friends: [],
    //   requests: [],
    //   _id: "5e90b40fb1a75a38d852c096"
    // }));
    // return {
    //   username: "sanket",
    //   email: "sanket.chouhan555@gmail.com",
    //   password: "$2b$10$ywg8b.inLrA1UKb/5xq3v.c0mviPvWZ7UYk0iEKozhCZcT9nQ8CxS",
    //   profilePicUrl: "https://firebasestorage.googleapis.com/v0/b/chatapp-9fa60.appspot.com/o/chat-app-profile-pics%2F5e5be574eedfd73d14403ec6?alt=media&token=ad8681dc-a478-4e97-82b9-e4d8b12459d5",
    //   friends: [],
    //   requests: [],
    //   _id: "5e90b40fb1a75a38d852c096"
    // }

  }

}
