import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  userAuthenticated = false;  // set user to not be authenticated

  constructor() { }

  ngOnInit() {
  }

  // log a user in, save to localStorage
  signIn() {
    let isAuthenticated = this.userAuthenticated;
    isAuthenticated = true;
    localStorage.setItem('authenticated', JSON.stringify(isAuthenticated));
  }

  // log a user out, save to localStorage
  signOut() {
    let isAuthenticated = this.userAuthenticated;
    isAuthenticated = false;
    localStorage.setItem('authenticated', JSON.stringify(isAuthenticated));
  }

}
