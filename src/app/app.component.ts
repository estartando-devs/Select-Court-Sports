import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'services/auth.service';
import { AuthService } from 'auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'select-court-sports';

  constructor(public auth: AuthService) {}

  ngOnInit(){
  }

  logout = () => {
    this.auth.logoutSocial()
  }
}
