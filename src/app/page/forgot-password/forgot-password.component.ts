import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  otp:any = '';
  otpForm!:FormGroup
  constructor(private formBuilde:FormBuilder,private router:Router) { }
  
  ngOnInit(): void {
    this.otpForm=this.formBuilde.group({
      otp:['123456'],
    })
  }
  
  
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };

  // handeOtpChange(value: string[]): void {
  //   console.log(value);
  // }

  handleFillEvent(value: string): void {
    this.otp = value;
    console.log(value);
  }

  valid(){

    // console.log(this.otpForm.value)
    const otp =this.otpForm.value.otp
    // console.log('otp == this.otp',otp ,'sdfghjk', this.otp);
    
    if(otp == this.otp){
      alert("please set new password!!");
      this.router.navigate(['newpassword-set']);
    }else{
      alert("otp is invalid !!")
      this.router.navigate(['login'])
    }
  }
}
