import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private db: DbService,private afAuth: AngularFireAuth) { }

  login(email: string, senha: string ){
    return this.afAuth.auth.signInWithEmailAndPassword(email, senha)
  }

  loginSocial() {
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
  }

  logoutSocial() {
    return this.afAuth.auth.signOut();
  }

  signup(user){
    this.db.add(user, "user")
  }

}
