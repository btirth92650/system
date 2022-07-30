import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-error',
  templateUrl: './otp-error.component.html',
  styleUrls: ['./otp-error.component.scss']
})
export class OtpErrorComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  resendOtp(){
    alert('OTP send Succesfully!!');
    this.route.navigate(['signup'])
  }

}
