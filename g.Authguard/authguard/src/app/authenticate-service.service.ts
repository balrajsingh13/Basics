import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateServiceService implements CanActivate{

  constructor() { }

  canActivate(){
    if(localStorage.getItem('userID') === 'balraj07' && localStorage.getItem('password') === 'PB06')
     return true;
    else
     return false;
  }
}
