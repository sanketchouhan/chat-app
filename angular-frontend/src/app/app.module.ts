import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs'

import {NgxImageCompressService} from 'ngx-image-compress';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatService } from './services/chat.service';
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [{ path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }]
  },
  { path: 'contacts', component: ContactsComponent },
  { path: 'chatroom', component: ChatroomComponent },
  { path: 'home', redirectTo: '/home/login', pathMatch: 'full' },
  { path: '', redirectTo: '/home/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/home/login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactsComponent,
    ChatroomComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    ChatService,
    UserService,
    NgxImageCompressService
    // {provide: ProfileComponent, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent]
})
export class AppModule { }
