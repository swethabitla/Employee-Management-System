import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationErrorsService {
  constructor() {}

  isInputInvalid(input: NgModel): boolean {
    if (input.errors && (input.touched || input.dirty)) {
      return true;
    }
    return false;
  }

  isErrorHidden(input: NgModel, errorType: string): boolean {
    if (
      input.errors &&
      input.errors[errorType] &&
      (input.dirty || input.touched)
    ) {
      return false;
    }
    return true;
  }
}
