import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { first } from 'rxjs';
import { SignupserviceService } from '../services/signupservice.service';
import { Router } from '@angular/router';
import { ValidationServiceService } from '../services/validation-service.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

emailVerication ='false';
userObj: User = new User();
forgotPassResponse:any;

  constructor(
    private SignupserviceService : SignupserviceService,
    private router : Router,
    private validationService :ValidationServiceService,
  ) { }

  ngOnInit(): void {
  }


  verifyEmail(){

    console.log(this.userObj);

    this.SignupserviceService.verifyEmail(this.userObj).pipe(first()).subscribe((response: any) => {
      if (response.serviceStatus == "Success") {
        this.forgotPassResponse = response.serviceResponse;
        console.log("appreciation : ", this.forgotPassResponse)
        alert(response.serviceResponse);
     this.emailVerication='true';
      } else {
        console.error(response.serviceResponse)
        alert(response.serviceResponse);

      }
    });

  }

  submit(){
    console.log(this.userObj);

    let inputValidated: boolean = this.validateForgotPasswordForm(this.userObj)
    if (!inputValidated) return;

    this.SignupserviceService.setNewPassword(this.userObj).pipe(first()).subscribe((response: any) => {
      if (response.serviceStatus == "Success") {
        this.forgotPassResponse = response.serviceResponse;
        console.log("appreciation : ", this.forgotPassResponse)
        alert(response.serviceResponse);
        this.router.navigate(['login'])  

      } else {
        console.error(response.serviceResponse)
        alert(response.serviceResponse);

      }
    });
    
  }
  validateForgotPasswordForm(userObj : User){

    if (!this.validationService.validateNullUndefinedEmptyString(userObj.password)) {
     alert("Please Enter New password!!");
      return false;
    }
    return true;
  }
}
