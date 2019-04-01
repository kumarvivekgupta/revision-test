import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AUTH_TOKEN, API_KEY, HAS_TEST_ENDED} from '../../../utils/constants';

@Injectable()
export class NewUserGuard implements CanActivate {

  constructor(private location: Location) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!localStorage.getItem(API_KEY) && !localStorage.getItem(AUTH_TOKEN) && !localStorage.getItem(HAS_TEST_ENDED)) {
      return true;
    }

    this.location.back();
    return false;
  }
}
