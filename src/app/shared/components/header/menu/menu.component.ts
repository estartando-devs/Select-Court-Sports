import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LANG, MENU } from 'src/theme/pt';
import { AuthService } from 'auth/auth.service';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public lang = LANG;
  public menu = MENU;
  public open : boolean;
  public options = [];

  constructor(
    private router:  Router,
    private auth: AuthService,
    private menuService: MenuService
  ) {}

  toggleMenu(){
    this.menuService.toggleMenu()
  }

  logout(){
    this.toggleMenu()
    this.auth.logoutSocial()
  }

  goTo(route){
    this.toggleMenu()
    this.router.navigate([route])
  }

  ngOnInit() {
    this.menuService.openSub.subscribe(status => {
      this.open = status
    })
    this.auth.isLogged.subscribe(isLogged => {
       this.options = [
        {
          option: MENU.HOME,
          action: () => this.goTo(MENU.HROUTER),
        },
        {
          option: MENU.CONTACT,
          action: () => this.goTo(MENU.CROUTER),

        }
      ]
      isLogged ? this.options.push({
        option: MENU.SCHEDULING,
        action: () => this.goTo(MENU.SROUTER)
      },{
        option: MENU.LOGOUT,
        action: () => this.logout()
      }) : this.options.push({
        option: MENU.LOGIN,
        action: () => this.goTo(MENU.LROUTER)
      })
    })
  }

}
