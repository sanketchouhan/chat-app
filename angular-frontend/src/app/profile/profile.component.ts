import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize} from 'rxjs/operators'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imgSrc = "assets/images/defaultProfile.png"
  selectedImg: any;
  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }
  afStorageRef: any;

  uploadfile(){
    var filepath= "/chat-app-profile-pics/"+this.selectedImg.name;
    const fileref=this.afStorage.ref(filepath);
    this.afStorage.upload(filepath,this.selectedImg).snapshotChanges().pipe(
      finalize(()=>{
        fileref.getDownloadURL().subscribe((url)=>{
          console.log(url);
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
      this.imgSrc = "assets/images/defaultProfile.png";
      this.selectedImg = null;
    }



    // this.afStorageRef = this.afStorage.ref("/chat-app-profile-pics/");
    // let fileUpload = this.afStorageRef.put(event.target.file[0]);

    // fileUpload.on('state_changed', function(snapshot){
    //   // Observe state change events such as progress, pause, and resume
    //   // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   console.log('Upload is ' + progress + '% done');

    // }, function(error) {
    //   // Handle unsuccessful uploads
    // }, function() {
    //   // Handle successful uploads on complete
    //   // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //   fileUpload.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //     console.log('File available at', downloadURL);
    //   });
    // });

  }

}


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBeQz5BeR5EY9g6wKYouxPp4OUArdAjPG8",
//     authDomain: "chatapp-9fa60.firebaseapp.com",
//     databaseURL: "https://chatapp-9fa60.firebaseio.com",
//     projectId: "chatapp-9fa60",
//     storageBucket: "chatapp-9fa60.appspot.com",
//     messagingSenderId: "1014475100914",
//     appId: "1:1014475100914:web:e2f8ec434edcf6ea05b66b"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>
