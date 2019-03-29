import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UserFormAnimationService } from '../../../services/userform-animation';
import { ValidationErrorsService } from '../../../services/validation-errors.service';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    email: '',
    password: '',
    password2: ''
  };

  @ViewChild('signupForm')
  form: any;

  constructor(
    private animationService: UserFormAnimationService,
    public validationErrors: ValidationErrorsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.animationService.getActive().subscribe(active => {
      if (active !== 'login') {
        this.user = {
          email: '',
          password: '',
          password2: ''
        };
        this.form.reset();
      }
    });
  }

  onSubmit(): void {
    this.authService.signUp(this.user.email, this.user.password).then(user => {
      this.animationService.toggle('signup');
    });
  }
}
