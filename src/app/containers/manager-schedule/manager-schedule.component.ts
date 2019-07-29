import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Schedule, HoursConfig } from 'src/app/shared/models';
import { LANG } from 'src/theme/pt';
import * as moment from 'moment';
import { ManagerScheduleService } from './manager-schedule.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-manager-schedule',
  templateUrl: './manager-schedule.component.html',
  styleUrls: ['./manager-schedule.component.scss']
})
export class ManagerScheduleComponent implements OnInit {

  public lang = LANG;
  public formSchedule: FormGroup
  public hours = []
  // public date = new BehaviorSubject<Date>(new Date())

  constructor(
    // private formBuilder: FormBuilder, private hourConfigService: ManagerScheduleService
    ) {}

  ngOnInit() {
    this.hours.push(...this.mountHoursObj())
    this.createForm(new Schedule());
    // this.formSchedule.valueChanges.subscribe(value=>{
    //   console.log(value)
    // })
  }

  setWeekDay(event){
    console.log("weekday --> ", event)
  }

  setWeek(event){
    console.log("week --> ", event)
  }

  setHour(hour){
    // this.hourConfigService.setState(hour.label, hour.value)
  }

  mountHoursObj(){
    let hours = []
    for(let i=0 ; i<24; i++)
      hours.push({label: i, value: false})
    return hours
  }

  createForm(_schedule: Schedule){
    // this.formSchedule = this.formBuilder.group({
    //   date: [""],
    //   price: [""],
    //   status: [""]
    // })
  }

}
