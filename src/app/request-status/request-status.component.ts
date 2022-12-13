import { Component, OnInit } from '@angular/core';
import { Request } from '../models/request';
import { RequestserviceService } from '../services/requestservice.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {

  obj: Request = new Request();
  requestAccept:any;
  requestFinish:any;
  requestInProcess:any;

  requestDetails:any;
  sideNavStatus: boolean = true;
  totalclothes:any;
  constructor(
    private requestserviceService : RequestserviceService,

  ) { }

  ngOnInit(): void {

    this.getRequestDetails();
  }

  getRequestDetails(){
    
    this.requestserviceService.getRequestDetails().pipe(first()).subscribe((response: any) => {
      if (response.serviceStatus == "Success") {
        this.requestDetails = response.serviceResponse;
       
        console.log("current user : ", this.requestDetails)
        
        console.log("totalclothes : ", this.totalclothes)

      } else {
        console.error(response.serviceResponse)

      }
    });
  }

  accept(details :Request){

    console.log(details,"details");
    details.status='accept';
     
    this.requestserviceService.updateStatus(details).pipe(first()).subscribe((response: any) => {
      if (response.serviceStatus == "Success") {
        this.requestAccept = response.serviceResponse;    
        console.log("current user : ", this.requestAccept)
        alert(response.serviceResponse);
      } else {
        console.error(response.serviceResponse)
        alert(response.serviceResponse);
      }
    });
    
  }

  finish(details :Request){
    console.log(details,"details");
    details.status='finish';
     
    this.requestserviceService.updateStatusFinish(details).pipe(first()).subscribe((response: any) => {
      if (response.serviceStatus == "Success") {
        this.requestFinish = response.serviceResponse;    
        console.log("current user : ", this.requestFinish)
        alert(response.serviceResponse);
      } else {
        console.error(response.serviceResponse)
        alert(response.serviceResponse);
      }
    });


  }
  inProcess(details :Request){

    console.log(details,"details");
    details.status='inprocess';
     
    this.requestserviceService.updateStatusInprocess(details).pipe(first()).subscribe((response: any) => {
      if (response.serviceStatus == "Success") {
        this.requestInProcess = response.serviceResponse;    
        console.log("current user : ", this.requestInProcess)
        alert(response.serviceResponse);
      } else {
        console.error(response.serviceResponse)
        alert(response.serviceResponse);
      }
    });

  }
}
