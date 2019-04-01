import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {API_KEY, AUTH_TOKEN, HAS_TEST_ENDED} from '../../../utils/constants';

@Injectable()
export class TestEndGuard implements CanActivate {

  constructor(private location: Location) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem(HAS_TEST_ENDED) && !localStorage.getItem(AUTH_TOKEN) && !localStorage.getItem(API_KEY)) {
      return true;
    }

    this.location.back();
    return false;
  }
}
