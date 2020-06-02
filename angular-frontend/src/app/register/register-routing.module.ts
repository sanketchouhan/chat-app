import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { ConfirmOtpComponent } from './confirm-otp/confirm-otp.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'confirmotp', component: ConfirmOtpComponent, data: { animation: 'ConfirmOtp' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
