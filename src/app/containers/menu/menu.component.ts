import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';
import { MENU } from 'src/theme/pt';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public lang = LANG;
  public menu = MENU;
  public options = [
    {
      option: MENU.HOME,
      router: MENU.HROUTER,
    },
    {
      option: MENU.LOGIN,
      router: MENU.LROUTER,
    },
    {
      option: MENU.SCHEDULING,
      router: MENU.SROUTER,

    },
    {
      option: MENU.CONTACT,
      router: MENU.CROUTER,

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
