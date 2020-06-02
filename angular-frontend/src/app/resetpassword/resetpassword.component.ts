import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { ChatService } from '../service/chat.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  id: string = '';

  constructor(private route: ActivatedRoute, private userService: UserService, private _chatService: ChatService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  newPassword: string = "";
  confirmPassword: string = "";
  success: boolean = false;
  errorMessage: string = "";


  //reset password
  resetPassword() {
    if (this.newPassword.length > 0 && this.newPassword === this.confirmPassword) {
      this._chatService.overlay.emit(true);
      this.userService.resetPassword(this.id, { password: this.newPassword }).subscribe((data: any) => {
        this._chatService.overlay.emit(false);
        if (data) {
          this.success = true;
        }
      }, err => {
        this.errorMessage = "Some error occured! Please try again";
        this.success = false;
        this._chatService.overlay.emit(false);
      });
    } else {
      this.errorMessage = "Please check your password";
    }
  }

}
