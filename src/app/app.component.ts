import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'services/auth.service';
import { AuthService } from 'auth/auth.service';
import { DbService } from 'services/db.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'select-court-sports';

  constructor(public auth: AuthService, private db: DbService) {}

  ngOnInit(){
    this.db.getAll("user").subscribe( users => {
      users.subscribe(_users => {
        console.log("USERS - ", _users)
      })
    }, error => {
      console.log("Error - ", error)
    }, () => {

    })
  }

  logout = () => {
    this.auth.logoutSocial()
  }
}
