import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators'
import { user } from '../models/user';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imgSrc = "assets/images/defaultProfile.png"
  selectedImg: any;
  constructor(private afStorage: AngularFireStorage, private _userService: UserService, public dialog: MatDialogRef<ProfileComponent>) { }

  user: user;

  ngOnInit() {
    // this.user = JSON.parse(localStorage.getItem("LoggedInUser"));
    this.user = this._userService.getUser();
    this.imgSrc = this.user.profilePicUrl;
  }
  afStorageRef: any;

  uploadfile() {
    var filepath = "/chat-app-profile-pics/" + this.user._id;
    const fileref = this.afStorage.ref(filepath);
    this.afStorage.upload(filepath, this.selectedImg).snapshotChanges().pipe(
      finalize(() => {
        fileref.getDownloadURL().subscribe((url) => {
          console.log(url);
          console.log(this.user._id);
          this._userService.updateProfilePic(this.user._id, { "url": url }).subscribe((data) => {
            this.dialog.close();
          });
        });
      })
    ).subscribe();

  }


  upload(event) {

    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];
    } else {
      this.imgSrc = this.user.profilePicUrl;
      this.selectedImg = null;
    }
  }

}