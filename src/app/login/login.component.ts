import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { LoginserviceService } from '../services/loginservice.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { ValidationServiceService } from '../services/validation-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginservice : LoginserviceService,
    private router : Router,
    private validationService :ValidationServiceService,

  ) { }

  userObj: User = new User();
  loginResponse:any;
  ngOnInit(): void {
  }

  loginUser(){
    console.log(this.userObj);

    let inputValidated: boolean = this.validateLoginForm(this.userObj)
    if (!inputValidated) return;


    this.loginservice.loginUser(this.userObj).pipe(first()).subscribe((response: any) => {
      if (response.serviceStatus == "Success") {
        this.loginResponse = response.serviceResponse;
        console.log("current user : ", this.loginResponse)
        sessionStorage.setItem('userId', JSON.stringify(this.loginResponse.userId));
        sessionStorage.setItem('name', JSON.stringify(this.loginResponse.name));

    
       this.router.navigate(['dashboard'])  
      } else {
        alert(response.serviceResponse);

        console.error(response.serviceResponse)
      }
    });
  }

  validateLoginForm(userObj : User){

    if (!this.validationService.validateNullUndefinedEmptyString(userObj.email)) {
     alert("Please Enter Email!!");
      return false;
    }
    if (!this.validationService.validateEmail(userObj.email)) {
      alert("Please Enter valid email!!");
       return false;
     }
    if (!this.validationService.validateNullUndefinedEmptyString(userObj.password)) {
      alert("Please Enter password!!");
       return false;
     }
     

    return true;


  }
}
