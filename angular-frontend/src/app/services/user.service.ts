import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";
import { user } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: user;

  constructor(private http: HttpClient) { }

  loginUser(user) {
    return this.http.post("/user/login", user);
  }

  registerUser(user: user) {
    return this.http.post("/user/register", user);
  }

  updateProfilePic(userId, profilePicUrl) {
    return this.http.post("/user/profilePicupdate/" + userId, profilePicUrl);
  }

  getAllUser() {
    return this.http.get("/user/allusers");
  }

  setUser(user) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }
}
