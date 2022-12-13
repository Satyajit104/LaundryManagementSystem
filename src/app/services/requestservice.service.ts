import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../models/request';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class RequestserviceService {

  private baseURL = "http://localhost:8089/LMS/";

  constructor(private http: HttpClient) { }

  addLaundryRequest( obj : Request){
    return this.http.post(`${this.baseURL}` + `api/addLaundryRequest`, obj);
  }
  getRequestDetails(){
    return this.http.get(`${this.baseURL}` + `api/getRequestDetails`);


  }
  updateStatus( details : Request){
    return this.http.post(`${this.baseURL}` + `api/changeStatusAsAccept`, details);
  }
  updateStatusInprocess( details : Request){
    return this.http.post(`${this.baseURL}` + `api/updateStatusInprocess`, details);
  }
  updateStatusFinish( details : Request){
    return this.http.post(`${this.baseURL}` + `api/updateStatusFinish`, details);
  }
  getRequestDetailsByUserId(user : User){
    return this.http.post(`${this.baseURL}` + `api/getRequestDetailsByUserId`, user);
  }
  }

