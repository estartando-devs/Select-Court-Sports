import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { DbService } from 'services/db.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: Observable<any>

  constructor(private db: DbService,private afAuth: AngularFireAuth) {
    this.isLogged = afAuth.authState.pipe(map(user=>!!user))
  }

  login(email: string, senha: string ){
    return this.afAuth.auth.signInWithEmailAndPassword(email, senha)
  }

  loginSocial() {
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
  }

  logoutSocial() {
    console.log("chegou")
    return this.afAuth.auth.signOut();
  }

  signup(user){
    this.db.add(user, "user")
  }

}
