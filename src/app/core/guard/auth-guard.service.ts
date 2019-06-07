import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.afAuth.authState.pipe(map(user=>!!user)).pipe(take(1)).pipe(tap(allowed=>{
        console.log("ALLOWED - ", allowed)
        if(!allowed){
          this.router.navigate(['/login'])
        }
      }))
   }

}
