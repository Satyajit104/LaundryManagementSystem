import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  private baseURL = "http://localhost:8089/LMS/";

  constructor(private http: HttpClient) { }

  signUpUser(user: User) {
    return this.http.post(`${this.baseURL}` + `api/signUpUser`, user);
  }

  clothPrice(){
    return this.http.get(`${this.baseURL}` + `api/clothPrice`);

  }

  verifyEmail(user: User) {
    return this.http.post(`${this.baseURL}` + `api/verifyEmail`, user);

  }

  setNewPassword(user: User) {
    return this.http.post(`${this.baseURL}` + `api/setNewPassword`, user);

  }
}
