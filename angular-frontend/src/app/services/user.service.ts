import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  chatroomUser = new EventEmitter();  //chatroom user details
  
  user = {
    username: "",
    password:""
  }

  constructor(private http: HttpClient) { }

  loginUser(user) {
    return this.http.post("/user/login", user);
  }

  setUser(user) {
    this.user = user;
  }
  getUser() {
    return this.user;
  }
}
