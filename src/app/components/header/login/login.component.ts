import { Component, OnInit, ViewChild } from '@angular/core';
import { UserFormAnimationService } from '../../../services/userform-animation';
import { AuthService } from '../../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidationErrorsService } from '../../../services/validation-errors.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  @ViewChild('loginForm')
  form: any;

  constructor(
    private animationService: UserFormAnimationService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    public validationErrors: ValidationErrorsService
  ) {}

  ngOnInit() {
    this.animationService.getActive().subscribe(active => {
      if (active !== 'login') {
        this.user = {
          email: '',
          password: ''
        };
        this.form.reset();
      }
    });
  }

  onSubmit(): void {
    this.authService
      .login(this.user.email, this.user.password)
      .then(() => {
        this.animationService.toggle('login');
      })
      .catch(err => {
        console.log(err);
        this.flashMessage.show(err.message, {
          cssClass: 'alert-error',
          timeout: 6000
        });
      });
  }
}
