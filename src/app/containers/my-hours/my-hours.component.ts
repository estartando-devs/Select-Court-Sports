import { Component, OnInit } from '@angular/core';
import { LANG, MENU} from 'src/theme/pt';

@Component({
  selector: 'app-my-hours',
  templateUrl: './my-hours.component.html',
  styleUrls: ['./my-hours.component.scss']
})
export class MyHoursComponent implements OnInit {

  public lang = LANG
  public menu = MENU

  constructor() { }

  ngOnInit() {
  }

  back(){
    window.history.back();
  }

}
