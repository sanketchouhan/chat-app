import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, expand } from 'rxjs/operators'
import { user } from '../models/user';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ChatService } from '../services/chat.service';
import {NgxImageCompressService} from 'ngx-image-compress';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imgSrc = "assets/images/defaultProfile.png"
  selectedImg: any;
  afStorageRef: any;

  constructor(private afStorage: AngularFireStorage,
    private _userService: UserService,
    private _chatService: ChatService,
    private imageCompress: NgxImageCompressService,
    public dialog: MatDialogRef<ProfileComponent>) {
  }

  user: user;

  ngOnInit() {
    // this.user = JSON.parse(localStorage.getItem("LoggedInUser"));
    this.user = this._userService.getUser();
    this.imgSrc = this.user.profilePicUrl;
  }

  // compressFile() {
  
  //   this.imageCompress.uploadFile().then(({image, orientation}) => {
    
  //     // this.imgResultBeforeCompress = image;
  //     console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
      
  //     this.imageCompress.compressFile(image, orientation, 50, 50).then(
  //       result => {
  //         // this.imgResultAfterCompress = result;
  //         console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
  //       }
  //     );
      
  //   });
    
  // }
  // data: FileList;

  // public fileChangeEvent(event) {
  //   this.data = event.target.files;
  //   console.log('input: ' + this.data);
  //   const compress = this.compress(this.data[0])
  //     .subscribe(res => {
  //       const reader = new FileReader();
  //       reader.onload = (e: any) => this.imgSrc = e.target.result;
  //       reader.readAsDataURL(event.target.files[0]);
  //       //Code block after completing all compression
  //       console.log('Compression successful ' + res);
  //       // }
  //     });
  // }

  // compress(file: File): Observable<any> {
  //   const width = 200; // For scaling relative to width
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   return Observable.create(observer => {
  //     reader.onload = ev => {
  //       const img = new Image();
  //       img.src = (ev.target as any).result;
  //       (img.onload = () => {
  //         const elem = document.createElement('canvas'); // Use Angular's Renderer2 method
  //         // const scaleFactor = width / img.width;
  //         let sy = 0, sx = 0;
  //         let swidth = 0, sheight = 0;
  //         // elem.width = width;
  //         // elem.height = img.height * scaleFactor;
  //         // elem.height = width;
  //         // const ctx = <CanvasRenderingContext2D>elem.getContext('2d');
  //         if (img.width > img.height) {
  //           elem.width = elem.height = swidth = sheight = img.height;
  //           sx = (img.width - img.height) / 2;
  //         }
  //         else if (img.width < img.height) {
  //           elem.width = elem.height = swidth = sheight = img.width;
  //           sy = (img.height - img.width) / 2;
  //         }else{
  //           elem.width = elem.height = swidth = sheight = img.width;
  //         }
  //         const ctx = <CanvasRenderingContext2D>elem.getContext('2d');
  //         ctx.drawImage(img, sx, sy, swidth, sheight, 0, 0, elem.width, elem.height);
  //         ctx.canvas.toBlob(
  //           blob => {
  //             observer.next(
  //               new File([blob], file.name, {
  //                 type: 'image/jpeg',
  //                 lastModified: Date.now(),
  //               }),
  //             );
  //           },
  //           'image/jpeg',
  //           1,
  //         );
  //       }),
  //         (reader.onerror = error => observer.error(error));
  //     };
  //   });
  // }





  // working
  uploadfile() {
    this._chatService.overlay.emit(true);
    var filepath = "/chat-app-profile-pics/" + this.user._id;
    const fileref = this.afStorage.ref(filepath);

    this.afStorage.upload(filepath, this.selectedImg).snapshotChanges().pipe(
      finalize(() => {
        fileref.getDownloadURL().subscribe((url) => {
          // console.log(url);
          // console.log(this.user._id);
          this._userService.updateProfilePic(this.user._id, { "url": url }).subscribe((data) => {
            this.user.profilePicUrl = url;
            this._userService.setUser(this.user);
            this._chatService.overlay.emit(false);
            this.dialog.close();
          },err => {
            this._chatService.overlay.emit(false);
            // console.log(err);
          });
        },err => {
          this._chatService.overlay.emit(false);
          // console.log(err);
        });
      })
    ).subscribe(err => {
      this._chatService.overlay.emit(false);
      // console.log(err);
    });

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