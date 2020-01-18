import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//angular materials
// import {MatListModule} from '@angular/material/list';
// import {MatTabsModule} from '@angular/material/tabs';
import { Observable } from 'rxjs'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatService } from './services/chat.service';
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes:Routes= [
  // { path: 'home',     component: HomeComponent },
  // { path: 'home/login',     component: LoginComponent },
  // { path: 'home/register',     component: RegisterComponent },
  { path: 'home',  component: HomeComponent, 
    children: [{ path: 'login',  component: LoginComponent },
                { path: 'register',  component: RegisterComponent }] },
  { path: 'contacts',  component: ContactsComponent, 
    children: [{ path: 'chatroom/:user',  component: ChatroomComponent },
                { path: 'chatroom',  component: ChatroomComponent }] },
  // { path: 'login',     component: LoginComponent },
  // { path: 'register',     component: },
  { path: 'chatroom',     component: ChatroomComponent },
  { path: 'chatroom/:user',     component: ChatroomComponent },
  { path: '', redirectTo: 'home/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'home/login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactsComponent,
    ChatroomComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    // MatListModule,
    // MatTabsModule,
    HttpClientModule
  ],
  providers: [
    ChatService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
