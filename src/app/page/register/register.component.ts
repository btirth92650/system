import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { ConfirmPasswordValidator } from 'src/app/utils/validation'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 public showPassword:boolean = false
 onClick(){
  this.showPassword = !this.showPassword
 }

  otp:any = '';
  otpForm!:FormGroup
  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group(
      {
        firstname: ['', [Validators.required,Validators.pattern('[A-Za-z]{1,32}')]],
        lastname: ['', [Validators.required,Validators.pattern('[A-Za-z]{1,32}')]],
        dob: ['', [Validators.required,]],
        pancard: ['', [Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
        adharcard: ['', [Validators.required,Validators.pattern('[0-9]{4}-[0-9]{4}-[0-9]{4}')]],
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        pincode: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],
        email: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required,Validators.maxLength(6)]],
        conformpassword: ['', [Validators.required,Validators.maxLength(6)]],
        mobileno: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
      },
      {
        validator: ConfirmPasswordValidator("password", "conformpassword")
      },
      );

      this.otpForm = this.formBuilder.group({
        otp:['123456'],
      })
  }

  get f() {
    return this.signupForm.controls;
  }

  signUp() {
    console.log(this.signupForm.value)
    alert("Otp Send Successfully !!")
    // this.router.navigate(['login'])
    //  this.signupForm.reset();

  }

  // For Otp
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
    console.log(value);
    this.otp = value
  }

  valid() {

    const otp = this.otpForm.value.otp

    if(otp == this.otp){
      alert("Registration Succesful !!")
      this.router.navigate(['login'])
    }else{
      alert("otp is invalid !!")
      this.router.navigate(['signup'])
    }
    // alert("Registration Succesful !!")
    // this.router.navigate(['login'])
    // setTimeout(() => {
    //   this.router.navigate(['login'])
    // }, 5000);
  }

}
