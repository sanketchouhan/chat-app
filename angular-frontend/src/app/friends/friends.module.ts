import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsComponent } from './friends.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { SearchComponent } from './search/search.component';
import { NotificationComponent } from './notification/notification.component';
import { ChatroomModule } from '../chatroom/chatroom.module';
import { ProfileComponent } from './profile/profile.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../../environments/environment';



@NgModule({
  declarations: [
    FriendsComponent,
    FriendsListComponent,
    SearchComponent,
    NotificationComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    FormsModule,
    ChatroomModule,
    ImageCropperModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  entryComponents: [ProfileComponent]
})
export class FriendsModule { }
