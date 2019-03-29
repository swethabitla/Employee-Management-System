import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteModalService {
  showModal = new BehaviorSubject(false);

  constructor() {}

  changeState(state: boolean): void {
    this.showModal.next(state);
  }

  getState(): Observable<boolean> {
    return this.showModal.asObservable();
  }
}
