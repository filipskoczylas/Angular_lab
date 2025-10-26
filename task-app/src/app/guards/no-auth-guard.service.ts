import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable(
  { providedIn: "root" }
)
export class NoAuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      map(e => {
        console.log("NoAuthGuardService", e)

        if (e) {
          this.router.navigate(['/']);
          return false;
        } else {
          return true;
        }
      }),
      catchError((err) => {
        return of(true);
      })
    );
  }
}