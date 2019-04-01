import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {API_KEY, AUTH_TOKEN} from '../../../utils/constants';

@Injectable()
export class TestStartGuard implements CanActivate {

  constructor(private location: Location) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!localStorage.getItem(AUTH_TOKEN) && localStorage.getItem(API_KEY)) {
      return true;
    }

    this.location.back();
    return false;
  }
}
