import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";
import { user } from '../models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  //current global user
  user: user;

  constructor(private http: HttpClient, private _route: Router, ) { }

  //login user
  loginUser(user) {
    return this.http.post("/user/login", user);
  }

  //register new user
  registerUser(user: user) {
    return this.http.post("/user/register", user);
  }

  //upload user profile pic
  updateProfilePic(userId, profilePicUrl) {
    return this.http.post("/user/profilePicupdate/" + userId, profilePicUrl);
  }

  getAllUser() {
    return this.http.get("/user/allusers");
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
  }
}
