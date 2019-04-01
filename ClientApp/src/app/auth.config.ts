import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  clientId: 'team-te',
  issuer: 'https://auth.cuberoot.io',
  scope: 'team-api',
  redirectUri: window.location.origin + '/sign-in-callback',
  postLogoutRedirectUri: window.location.origin + '/'
}
