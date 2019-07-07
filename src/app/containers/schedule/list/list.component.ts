import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';
import { Schedule } from 'src/app/shared/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public lang = LANG

  public generalHours = new Array<Schedule>()

  constructor() { }

  ngOnInit() {
    this.generalHours = [
      {
        date:new Date("April 08, 2018 15:15:00"),
        price: 100,
        status: "Disponivel",
      },
      {
        date:new Date("April 08, 2018 15:15:00"),
        price: 100,
        status: "Disponivel",
      },
      {
        date: new Date("May 13, 2018 10:00:02"), 
        price: 789, 
        status:"Locado" 
      },
      {
        date: new Date("May 13, 2018 10:00:02"), 
        price: 789, 
        status:"Locado" 
      },
      {
        date: new Date("May 13, 2018 10:00:02"), 
        price: 789, 
        status:"Locado" 
      },
      {
        date: new Date("May 13, 2018 10:00:02"), 
        price: 789, 
        status:"Locado" 
      },
      {
        date: new Date("May 13, 2018 10:00:02"), 
        price: 789, 
        status:"Locado" 
      },
      {
        date: new Date("May 13, 2018 10:00:02"), 
        price: 789, 
        status:"Locado" 
      },
      {
        date: new Date("May 13, 2018 10:00:02"), 
        price: 789, 
        status:"Locado" 
      },
      {
        date: new Date("July 10, 2018 12:00:40"), 
        price: 100, 
        status:"Disponivel" 
      }
    ]
  }
}
