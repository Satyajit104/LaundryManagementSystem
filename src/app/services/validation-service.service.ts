import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationServiceService {

  constructor() { }


  validateNullUndefinedEmptyString(text: any): boolean {

    if (text === undefined || text === null || text === "") {
      return false;
    }
    return true;
  }

  validateEmail(text: string): boolean {

    const regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if (text !== "" || text !== undefined || text !== null) {
      if (regex.test(text)) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }

  }
  validateAlphaWithSpace(text: string): boolean {

    const regex = /^[a-zA-Z ]+$/;
    if (text !== "" || text !== undefined || text !== null) {
      if (regex.test(text)) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }

  }
}
