import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ADMIN_AUTH_TOKEN} from '../../../utils/constants';

@Injectable()
export class AdminAnonymousGuard implements CanActivate {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.router.url);
    if (!localStorage.getItem(ADMIN_AUTH_TOKEN)) {
      return true;
    }
    this.router.navigate(['admin/dashboard']);
    return false;
  }
}
