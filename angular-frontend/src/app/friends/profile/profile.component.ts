import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { user } from 'src/app/models/user';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators'
import { ChatService } from 'src/app/service/chat.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imgSrc = "../../../assets/images/defaultProfile.png"
  // selectedImg: any;
  imgSelected: boolean = false;
  afStorageRef: any;
  user: user;
  globalUser: boolean = false;
  showUploading: boolean = false;

  constructor(private _userService: UserService, private afStorage: AngularFireStorage, private _chatService: ChatService) { }

  ngOnInit() {

    //get global user
    this.user = this._userService.getProfileUser();

    //check profile user is global user
    var x = JSON.parse(localStorage.getItem("LoggedInUser"))._id;
    if (this.user._id == x) {
      this.globalUser = true;
    }

    //set profile pic to userProfilePic
    // this.imgSrc = this.user.profilePicUrl;
    this.croppedImage = this.user.profilePicUrl;
  }

  //close profile dialog
  close() {
    this._userService.showDialog.emit(false);
  }




  /////////////////////////////////////////////////////////////
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.imgSelected = true;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  uploadfile() {
    //show uploading
    // this.showLoading();
    this.showUploading = true;

    //convert base64 to file type for upload
    let mimeType = 'image/png';
    const imgB64 = this.croppedImage.split(/,(.+)/)[1];
    const bstr = atob(imgB64);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], this.user._id, { type: mimeType });

    //path of the file to be stored
    var filepath = "/chat-app-profile-pics/" + this.user._id;
    const fileref = this.afStorage.ref(filepath);

    //upload to firebase
    this.afStorage.upload(filepath, file).snapshotChanges().pipe(
      finalize(() => {
        fileref.getDownloadURL().subscribe((url) => {
          this._userService.updateProfilePic(this.user._id, { "url": url }).subscribe((data) => {
            this.user.profilePicUrl = url;
            this._userService.setUser(this.user);
            // this.closeLoading();
            this.showUploading = false;
            this.close();
          }, err => {
            console.log(err);
            this.showUploading = false;
          });
        }, err => {
          console.log(err);
          this.showUploading = false;
        });
      })
    ).subscribe(err => {
      console.log(err);
      this.showUploading = false;
    });
  }

  // showLoading() {
  //   this._chatService.overlay.emit(true);
  // }
  // closeLoading() {
  //   this._chatService.overlay.emit(false);
  // }

}
