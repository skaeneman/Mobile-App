import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  private _userId = 'userId1';

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  // getter method for userId
  get userId() {
    return this._userId;
  }

  // call the signIn function in the authentication service
  onSignIn() {
    this.authService.signIn();
  }

  // call the signOut function in the authentication service
  onSignOut() {
    this.authService.signOut();
  }

}
