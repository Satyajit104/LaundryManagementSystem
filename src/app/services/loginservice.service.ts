import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private baseURL = "http://localhost:8089/LMS/";

  constructor(private http: HttpClient) { }

  loginUser(user: User){
    return this.http.post(`${this.baseURL}` + `api/loginUser`, user);

  }
}
