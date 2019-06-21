import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { Schedule } from './shared/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'select-court-sports';
  schedule = new Schedule()
  constructor(public auth: AuthService) {}

  ngOnInit(){}

  logout = () => {
    this.auth.logoutSocial()
  }
}
