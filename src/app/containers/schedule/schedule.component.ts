import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';
import { ScheduleService } from './schedule.service';
import { Observable } from 'rxjs';
import { Filter, Turn } from './schedule.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public lang = LANG
  public mouth = "Maio"

  public filter = new Filter()
  public turn = new Turn()

  constructor(private scheduleService: ScheduleService) {
    scheduleService.filter.subscribe(filter => {
      this.filter = filter
      this.turn = filter.turn
    })
  }

  setTurn(key){
    const currentValue = this.scheduleService.getCurrentState()["turn"][key]
    console.log(currentValue)
    const turn = {}
    turn[key] = !currentValue
    this.scheduleService.setState("turn", turn)
  }

  back(){
    window.history.back();
  }

  ngOnInit() {
  }

}
