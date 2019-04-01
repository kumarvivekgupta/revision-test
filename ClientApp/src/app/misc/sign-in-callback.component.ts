import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-sign-in-callback',
  template: 'Logging in ...',
})
export class SignInCallbackComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
    this.oauthService.loadDiscoveryDocument().then((doc) => {
      this.oauthService.tryLogin({
        onTokenReceived: (info) => {
          console.debug('state', info.state);
        }
      });
    });
  }

  ngOnInit() { }

}
