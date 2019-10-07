import { Component, OnInit } from '@angular/core';
import { LANG, MENU } from 'src/theme/pt';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public lang = LANG;
  public menu = MENU
  public options = []
  public route = MENU.LROUTER

  constructor(
    public router:  Router,
    public auth: AuthService
  ) {
  }

  ngOnInit() {
    this.auth.isLogged.subscribe(isLogged => {
      
     if(isLogged) this.route = MENU.SROUTER
     
   })
  }

  goTo(){
    this.router.navigate([this.route])
    console.log(this.route)
  }
  
}
