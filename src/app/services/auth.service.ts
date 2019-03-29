import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  login(email: string, password: string): Promise<object> {
    return new Promise((resolve, reject) => {
      this.auth.auth
        .signInWithEmailAndPassword(email, password)
        .then(user => resolve(user), err => reject(err));
    });
  }

  signUp(email: string, password: string): Promise<object> {
    return new Promise((resolve, reject) => {
      this.auth.auth
        .createUserWithEmailAndPassword(email, password)
        .then(user => resolve(user), err => reject(err));
    });
  }

  logout() {
    this.auth.auth.signOut();
  }

  getAuth(): Observable<User> {
    return this.auth.authState.pipe(map(auth => auth));
  }
}
