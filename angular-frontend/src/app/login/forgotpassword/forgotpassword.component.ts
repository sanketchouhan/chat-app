import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private userService: UserService, private _chatService: ChatService) { }

  ngOnInit() {
  }

  success: boolean = false;
  email: string = '';
  errorMessage: string;

  //send reset password link to user
  sendPasswordResetLink() {
    if (this.email.length > 0) {
      this._chatService.overlay.emit(true);
      this.userService.sendPasswordResetLink({ email: this.email }).subscribe((data: any) => {
        this._chatService.overlay.emit(false);
        if (data) {
          this.success = true;
        }
      }, err => {
        this.success = false;
        this.errorMessage = err.error.status;
        this._chatService.overlay.emit(false);
      });
    } else {
      this.errorMessage = "Email is required";
    }
  }
}
