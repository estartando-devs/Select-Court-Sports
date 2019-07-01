import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.scss']
})
export class WeekDayComponent implements OnInit {
  public days = [1,2,3,4,5,6,7]
  constructor() { }

  ngOnInit() {
    let s = moment().days() 
    console.log(s)
  }

}

