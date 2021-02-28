import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersServiceService } from '../Services/users-service.service';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuardGuard implements CanActivate {
  constructor(private userservice:UsersServiceService , private router: Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if(this.userservice.isLogged()){
        alert("you are already sing in !!")
        this.router.navigateByUrl('/')
        return false
      }else{
        return true;
      }
  }
  
}
