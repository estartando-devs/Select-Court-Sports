import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Schedule } from 'src/app/shared/models';
import { LANG } from 'src/theme/pt';

@Component({
  selector: 'app-manager-schedule',
  templateUrl: './manager-schedule.component.html',
  styleUrls: ['./manager-schedule.component.scss']
})
export class ManagerScheduleComponent implements OnInit {

  public lang = LANG;
  public formSchedule: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Schedule());
    this.formSchedule.valueChanges.subscribe(value=>{
      console.log(value)
    })
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
