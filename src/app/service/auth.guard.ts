import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log(next);
    console.log(state);
    console.log('AuthGuard#canActivate called');

    return this.authService.isAuthorized( next );
    /*
    if (this.authService.isAuthorized()) {
      return true ;
    } else {
      this.router.navigate(['/dashboard']); // if fails go back to dashboard
    }
     */
  }
}
