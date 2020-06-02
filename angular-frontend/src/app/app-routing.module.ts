import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), data: { animation: 'Login' } },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule), data: { animation: 'Register' } },
  { path: 'friends', loadChildren: () => import('./friends/friends.module').then(m => m.FriendsModule), data: { animation: 'Friends' } },
  { path: 'chatroom', loadChildren: () => import('./chatroom/chatroom.module').then(m => m.ChatroomModule), data: { animation: 'Chatroom' } },
  { path: 'resetpassword/:id', loadChildren: () => import('./resetpassword/resetpassword.module').then(m => m.ResetpasswordModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
