import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private oauthService: OAuthService) {
  }
  public login() {
    this.oauthService.initImplicitFlow();
  }
  public logoff() {
    this.oauthService.logOut();
  }
  public get name() {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    let cany = claims as any;
    return cany.given_name || cany.sub;
  }
  public get IsAuthorised() {
    return this.oauthService.hasValidAccessToken();;
  }
}
