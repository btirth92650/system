import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './page/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { NewpasswordSetComponent } from './page/newpassword-set/newpassword-set.component';
import { HomeComponent } from './page/home/home.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { OtpErrorComponent } from './otp-error/otp-error.component';
import {  MatSidenavModule } from '@angular/material/sidenav';





@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    // SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NewpasswordSetComponent,
    HomeComponent,
    OtpErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxOtpInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSidenavModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
