import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private fireAuth:AngularFireAuth){}
  
  canActivate():Observable<boolean> {
    return this.fireAuth.authState.pipe(map(auth=>{
      if(auth){
        return true;
      }
      this.router.navigate['/']
      return false;
    }))
  }
}
