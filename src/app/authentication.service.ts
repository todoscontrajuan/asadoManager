import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isAuthenticated = () => {
  	return JSON.parse(sessionStorage.getItem('isLogged'));
  }
}
