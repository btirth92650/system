import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpErrorComponent } from './otp-error/otp-error.component';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { NewpasswordSetComponent } from './page/newpassword-set/newpassword-set.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent,pathMatch: 'full' },
  { path: 'signup', component: RegisterComponent,pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotPasswordComponent,pathMatch: 'full' },
  { path: 'newpassword-set', component: NewpasswordSetComponent,pathMatch: 'full' },
  { path: 'otp-error', component: OtpErrorComponent,pathMatch: 'full' },


  {path:'admin',
  loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
