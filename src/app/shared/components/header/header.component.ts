import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu/menu.service';
import { LANG, MENU } from 'src/theme/pt';
import { Router } from "@angular/router";
import { AuthService } from '../../../core/auth/auth.service';
import { User } from '../../models';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public lang = LANG;
  public menu = MENU;
  public open : boolean;
  public options = [];
  public user: User;

  constructor(
    public router:  Router,
    public auth: AuthService,
    public menuService: MenuService
  ) { 
    auth.user.subscribe(res => this.user = res)
   }

  toggleMenu(){
    this.menuService.toggleMenu()
  }

  goTo(route){
    this.router.navigate([route])
  }

  logout(){
    this.auth.logoutSocial()
    this.router.navigate([MENU.HROUTER])
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


