import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardiantokenGuard implements CanActivate, CanLoad {
  canActivate(): Observable<boolean> | boolean {

    if (localStorage.getItem("tokenPrueba")){

      console.log("Esta el tipo xd")
      return true;
    
    }
    else{
    console.log("Ese tipo no existe")
    this.router.navigateByUrl('')

    return false
  }
  }
  canLoad(): Observable<boolean>  | boolean {
    if (localStorage.getItem("tokenPrueba")){

      console.log("Esta el tipo xd")
      return true;
    
    }
    else{
    console.log("Ese tipo no existe")
    this.router.navigateByUrl('')

    return false
  }
  }

  constructor(private router : Router){

  }
}
