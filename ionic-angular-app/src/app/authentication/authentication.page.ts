import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  // call the signIn function in the authentication service
  onSignIn() {
    this.authenticationService.signIn();
  }

  // call the signOut function in the authentication service
  onSignOut() {
    this.authenticationService.signOut();
  }

}
