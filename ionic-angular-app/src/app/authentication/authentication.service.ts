import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userAuthenticated = false;  // set user to not be authenticated

  constructor() { }

  // log a user in, save to localStorage
  signIn() {
    console.log('signing in...');
    let isAuthenticated = this.userAuthenticated;
    isAuthenticated = true;
    localStorage.setItem('authenticated', JSON.stringify(isAuthenticated));
  }

  // log a user out, save to localStorage
  signOut() {
    console.log('signing out...');
    let isAuthenticated = this.userAuthenticated;
    isAuthenticated = false;
    localStorage.setItem('authenticated', JSON.stringify(isAuthenticated));
  }

  // check if the user is signed in
  get isAuthenticated() {
    return this.userAuthenticated;
  }

}
