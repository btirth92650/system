import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpassword-set',
  templateUrl: './newpassword-set.component.html',
  styleUrls: ['./newpassword-set.component.scss']
})
export class NewpasswordSetComponent implements OnInit {


  showPassword:boolean = false
  newpasswordsetForm!: FormGroup
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {

    this.newpasswordsetForm = this.formBuilder.group(
      {
        newpassword:['',[Validators.required]],
        conformPassword:['',[Validators.required]],

      },
      {
        validators: this.password.bind(this),
      },
      
      );
  }

  get f() {
    return this.newpasswordsetForm.controls;
  }

  submit(){
    alert("new password set succesfully !!")
    console.log(this.newpasswordsetForm.value)
    this.router.navigate(['login'])
  }

  password(formGroup: FormGroup | any) {
    const { value: newpassword } = formGroup.get('newpassword');
    const { value: conformPassword } = formGroup.get('conformPassword');
    return newpassword === conformPassword ? null : { passwordNotMatch: true };
  }

  onClick(){
    this.showPassword = !this.showPassword
  }

}
