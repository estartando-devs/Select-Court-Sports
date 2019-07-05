import { Component, OnInit } from '@angular/core';
import { LANG, MENU} from 'src/theme/pt';

@Component({
  selector: 'app-list-my-hours',
  templateUrl: './list-my-hours.component.html',
  styleUrls: ['./list-my-hours.component.scss']
})
export class ListMyHoursComponent implements OnInit {
  
  public lang = LANG
  
  public myHours:any 
  
  constructor() { }

  ngOnInit() {
    let array =[]
    let y = {
      date:"22/06", 
      value:"R$789", 
      status:"locado" 
    }
    let x = {
      date:"05/07", 
      value:"R$100", 
      status:"Disponivel" 
    }
    array.push(y)
    array.push(x)
    this.myHours = array
  }

}
