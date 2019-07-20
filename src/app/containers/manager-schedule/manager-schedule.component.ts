import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Schedule } from 'src/app/shared/models';
import { LANG } from 'src/theme/pt';
import * as moment from 'moment';

@Component({
  selector: 'app-manager-schedule',
  templateUrl: './manager-schedule.component.html',
  styleUrls: ['./manager-schedule.component.scss']
})
export class ManagerScheduleComponent implements OnInit {

  public lang = LANG;
  public formSchedule: FormGroup
  public hours = []
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.hours.push(...this.mountHoursObj())
    this.createForm(new Schedule());
    this.formSchedule.valueChanges.subscribe(value=>{
      console.log(value)
    })
  }

  setHour(hour){
    console.log(hour)
  }

  mountHoursObj(){
    let hours = []
    for(let i=0 ; i<24; i++)
      hours.push({label: i, value: false})
    console.log("CHEGOU", hours)

    return hours
  }

  createForm(_schedule: Schedule){
    this.formSchedule = this.formBuilder.group({
      date: [""],
      price: [""],
      status: [""]
      // date: [_schedule.date],
      // price: [_schedule.price],
      // status: [_schedule.status]
    })
  }

}
