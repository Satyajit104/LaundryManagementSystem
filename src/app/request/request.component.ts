import { Component, OnInit } from '@angular/core';
import { Request } from '../models/request';
import { RequestserviceService } from '../services/requestservice.service';
import { first } from 'rxjs';
import { ValidationServiceService } from '../services/validation-service.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {


  sideNavStatus: boolean = true;
  obj: Request = new Request();
  constructor(
    private requestserviceService : RequestserviceService,
    private validationService :ValidationServiceService,

  ) { }

  requestResponse:any;
  // requestsObj: Request = new Request();
  ngOnInit(): void {
  }


  addLaundryRequest(){

   console.log(this.obj, "obj");

   let inputValidated: boolean = this.validateLaundryRequest(this.obj)
   if (!inputValidated) return;

   console.log(sessionStorage.getItem("name"), "SESSION");
   
   this.obj.userId = sessionStorage.getItem("userId");
   this.obj.status='Request';
      console.log(this.obj, "obj");

   this.requestserviceService.addLaundryRequest(this.obj).pipe(first()).subscribe((response: any) => {
    if (response.serviceStatus == "Success") {
      this.requestResponse = response.serviceResponse;
      console.log("current user : ", this.requestResponse)
      alert(this.requestResponse);
      this.reset();
    
    } else {
      console.error(response.serviceResponse)
    }
  });
    
  }
  validateLaundryRequest(obj : Request){

    if (!this.validationService.validateNullUndefinedEmptyString(obj.date)) {
     alert("Please Enter Date!!");
      return false;
    }
    if (!this.validationService.validateNullUndefinedEmptyString(obj.top)) {
      alert("Please Enter Top Wear clothes count(If you don't have top wear clothes then mark as 0)!!");
       return false;
     }
     if (!this.validationService.validateNullUndefinedEmptyString(obj.bottom)) {
      alert("Please Enter Bottom Wear clothes count(If you don't have bottom Wear clothes then mark as 0)!!");
       return false;
     }
     if (!this.validationService.validateNullUndefinedEmptyString(obj.woolen)) {
      alert("Please Enter Woolen Wear clothes count(If you don't have woolen Wear clothes then mark as 0)!!");
       return false;
     }
     if (!this.validationService.validateNullUndefinedEmptyString(obj.address)) {
      alert("Please Enter Address!!");
       return false;
     }
     if (!this.validationService.validateNullUndefinedEmptyString(obj.contactPerson)) {
      alert("Please Enter Contact Person!!");
       return false;
     }
    return true;
  }
  reset(){
    this.obj.date='';
    this.obj.top='';
    this.obj.address='';
    this.obj.bottom='';
    this.obj.description='';
    this.obj.contactPerson='';
    this.obj.woolen='';
  }
}
