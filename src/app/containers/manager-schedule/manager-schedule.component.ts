import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';
import * as moment from 'moment';
import { ManagerScheduleService } from '../../core/services/manager-schedule.service';

@Component({
  selector: 'app-manager-schedule',
  templateUrl: './manager-schedule.component.html',
  styleUrls: ['./manager-schedule.component.scss']
})
export class ManagerScheduleComponent implements OnInit {

  public lang = LANG;
  public hours = []
  public weekDay = 0

  constructor(
    private managerScheduleService: ManagerScheduleService
    ) {}

  ngOnInit() {
    this.hours.push(...this.mountHoursObj())
    this.managerScheduleService.getRulesDay().subscribe(res=>{
      console.log(res)
      res && res.length > 0 ? this.hours = [...this.hours, ...res[this.weekDay]] : null
    })

  }

  setWeekDay(event){
    console.log("weekday --> ", event)
  }

  setWeek(event){
    console.log("week --> ", event)
  }

  setHour(hour){
    hour.value = !hour.value
    this.hours[hour.label] = hour
    console.log("hour --> ", hour)
    console.log("hour --> ", this.hours)
    // this.managerScheduleService.updateRule(this.hours, this.weekDay)
    // this.hourConfigService.setState(hour.label, hour.value)
  }

  mountHoursObj(){
    let hours = []
    for(let i=0 ; i<24; i++)
      hours.push({label: i, value: false})
    return hours
  }
}
