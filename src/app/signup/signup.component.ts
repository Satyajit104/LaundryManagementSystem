import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from '../models/user';
import { SignupserviceService } from '../services/signupservice.service';
import { ValidationServiceService } from '../services/validation-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private SignupserviceService : SignupserviceService,
    private router : Router,
    private validationService :ValidationServiceService,

  ) { }

  userObj: User = new User();
  signupResponse:any;
  ngOnInit(): void {
  }

  signUpUser(){
    console.log(this.userObj);

    let inputValidated: boolean = this.validateSignUpForm(this.userObj)
    if (!inputValidated) return;
    this.userObj.role='user';
    this.SignupserviceService.signUpUser(this.userObj).pipe(first()).subscribe((response: any) => {
      if (response.serviceStatus == "Success") {
        this.signupResponse = response.serviceResponse;
        console.log("appreciation : ", this.signupResponse)
       alert("Registration Successfull");  
       this.reset();
       this.router.navigate(['login'])  
      } else {
        console.error(response.serviceResponse)
        alert("sorry!!Your Registration failed")
      }
    });
  }
  validateSignUpForm(userObj : User){
    if (!this.validationService.validateNullUndefinedEmptyString(userObj.name)) {
      alert("Please Enter Name!!");
       return false;
     }
     if (!this.validationService.validateAlphaWithSpace(userObj.name)) {
      alert("Please Enter Name!!");
       return false;
     }
    if (!this.validationService.validateNullUndefinedEmptyString(userObj.email)) {
     alert("Please Enter Email!!");
      return false;
    }
    if (!this.validationService.validateEmail(userObj.email)) {
      alert("Please Enter valid email!!");
       return false;
     }
     if (!this.validationService.validateNullUndefinedEmptyString(userObj.mobile)) {
      alert("Please Enter Mobile number!!");
       return false;
     }
    if (!this.validationService.validateNullUndefinedEmptyString(userObj.password)) {
      alert("Please Enter password!!");
       return false;
     }
     
    
     
    return true;


  }


  reset(){
    this.userObj.name='';
    this.userObj.email='';
    this.userObj.mobile='';
    this.userObj.password='';

  }
}

