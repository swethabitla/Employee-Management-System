import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFormAnimationService {
  signup = new BehaviorSubject<boolean>(false);
  login = new BehaviorSubject<boolean>(false);
  active = new BehaviorSubject<string>(null);
  animationTime: number;

  constructor() {}

  toggle(type: string) {
    const active = this.active.getValue();

    const state = this[type].getValue();
    //  If a form is active and another one is going to be open close the active one and open the new one after its closed
    if (active && active !== type) {
      this[active].next(false);

      setTimeout(() => {
        this[type].next(!state ? true : false);
        this.active.next(type);
      }, this.animationTime + 100);
    } else {
      this[type].next(!state ? true : false);
      // If both forms are closed set active to null
      if (this.signup.getValue() === this.login.getValue()) {
        this.active.next(null);
      } else {
        this.active.next(type);
      }
    }
  }

  getState(type: string): Observable<boolean> {
    return this[type].asObservable();
  }

  setAnimationTime(time: number) {
    this.animationTime = time;
  }

  getActive(): Observable<string> {
    return this.active.asObservable();
  }
}
