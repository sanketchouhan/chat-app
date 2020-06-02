import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendsComponent } from './friends.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { SearchComponent } from './search/search.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '', component: FriendsComponent,
    children: [{ path: '', component: FriendsListComponent, data: { animation: 'Friendslist' } },
    { path: 'search', component: SearchComponent, data: { animation: 'Search' } },
    { path: 'notification', component: NotificationComponent, data: { animation: 'Notification' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
