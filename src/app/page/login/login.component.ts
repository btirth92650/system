  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup } from '@angular/forms';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class LoginComponent implements OnInit {

    
    public showPassword: boolean = false;
  

    email:string = '';
    password:string = '';

    loginForm!:FormGroup
    constructor(private formBuilder:FormBuilder, private router:Router) { }

    ngOnInit(): void {
      this.loginForm=this.formBuilder.group({
        email:['tirth@123'], 
        password:['123'],
      })

    }

    login(){
      // console.log(this.loginForm.value)
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password
      // console.log('email',email,'pass',password)
      // console.log('enter email',this.email,'entetr pass',this.password)

      if(email === this.email && password === this.password){
        alert("login is Succesful !!")
        this.router.navigate(['/admin'])
      }
      else{
        alert('login details is invalid !!')
      }

    }

    method_email(e:any){
      this.email = e.target.value;
    }
    method_password(e:any){
      this.password = e.target.value;
    }

    // password show hide 

    onClick(){
      this.showPassword = !this.showPassword
    }
      
      // alert("login is Succesful !!");
      // this.loginForm.reset()
      // this.router.navigate(['/admin'])
    
    /*this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if(user){
        alert("login is Succesful !!");
        this.loginForm.reset();
        this.router.navigate(['dashbord'])
      }else{
        alert("user not Found !!")
      }
    }) */

    // Forgot password

    forgot(){
      alert("Code Send Your Register Email !!")
    }

  }
