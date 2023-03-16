import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardGuard implements CanActivate{

  constructor(private router: Router) {
    
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const token = window.localStorage.getItem('Token');
    if(token) {
      console.log(token)
      return true;
    } else {
      this.router.navigate(['auth/login']);
      console.log(token)
      return false;
    }
  }
  
 
  
}
