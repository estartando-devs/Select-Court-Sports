import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public lang = LANG

  constructor() { }

  back(){
    window.history.back();
  }

  ngOnInit() {
  }

}
