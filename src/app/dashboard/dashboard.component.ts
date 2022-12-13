import { Component, OnInit } from '@angular/core';
import { Price } from '../models/Price';
import { Request } from '../models/request';

import { SignupserviceService } from '../services/signupservice.service';
import { first } from 'rxjs';
import { RequestserviceService } from '../services/requestservice.service';
import { User } from '../models/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  requestDetails:any[]= [];
  requestDetails1:any;
  requestDetails2:any;
  requestDetails3:any;
  requestDetails4:any;

  finishCount:any;
  acceptCount:any;
  requestCount:any;
  inprocessCount:any;

  obj: Request = new Request();

  sideNavStatus: boolean = true;
  constructor(
    private SignupserviceService : SignupserviceService,
    private requestserviceService : RequestserviceService,


  ) { }
  user: User = new User();
  
  userId= sessionStorage.getItem('userId');
  priceObj: Price = new Price();
  clothPricees:any;
  ngOnInit(): void {
    this.clothPrice();

    // this.getRequestDetails(this.user);
    this.getRequestDetails();
  }
  clothPrice(){
   // console.log(this.priceObj);
   // this.userObj.role='user';
    this.SignupserviceService.clothPrice().pipe(first()).subscribe((response: any) => {
      if (response.serviceStatus == "Success") {
        this.clothPricees = response.serviceResponse;
        console.log("clothprices : ", this.clothPricees)
       
       
      } else {
        console.error(response.serviceResponse)
        
      }
    });
  }
  getRequestDetails(){
    
    this.requestserviceService.getRequestDetails().pipe(first()).subscribe((response: any) => {
      if (response.serviceStatus == "Success") {
        this.requestDetails = response.serviceResponse;
        this.requestDetails1 = this.requestDetails.filter(x => x.status == 'finish' && x.userId == sessionStorage.getItem('userId'));
        this.requestDetails2 = this.requestDetails.filter(x => x.status == 'inprocess' && x.userId == sessionStorage.getItem('userId'));
        this.requestDetails3 = this.requestDetails.filter(x => x.status == 'request' && x.userId == sessionStorage.getItem('userId'));
        this.requestDetails4 = this.requestDetails.filter(x => x.status == 'accept' && x.userId == sessionStorage.getItem('userId'));
        console.log("requestDetails",this.requestDetails)

        console.log("requestDetails1",this.requestDetails1)
        console.log("requestDetails1",this.requestDetails2)
        console.log("requestDetails1",this.requestDetails3)
        console.log("requestDetails1",this.requestDetails4)

        this.finishCount = this.requestDetails1.length;
        this.acceptCount = this.requestDetails4.length;
        this.requestCount = this.requestDetails3.length;
        this.inprocessCount = this.requestDetails2.length;

        console.log("this.finishCount ",  this.finishCount )

        console.log("current user : ", this.requestDetails)
        

      } else {
        console.error(response.serviceResponse)

      }
    });
  }

  // getRequestDetails(user :User){
  //   this.user.userId= sessionStorage.getItem('userId');
  //   this.user.status= 'finish';
  //   console.log(user, "useruseruser");

    
  //   this.requestserviceService.getRequestDetailsByUserId(user).pipe(first()).subscribe((response: any) => {
  //     if (response.serviceStatus == "Success") {
  //       this.requestDetails = response.serviceResponse;
       
  //       console.log("current user : ", this.requestDetails);      

  //     } else {
  //       console.error(response.serviceResponse)

  //     }
  //   });
  // }
}
