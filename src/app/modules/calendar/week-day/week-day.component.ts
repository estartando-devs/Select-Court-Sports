import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-week-day',
  templateUrl: './week-day.component.html',
  styleUrls: ['./week-day.component.scss']
})
export class WeekDayComponent implements OnInit {
  public days = []
  public activeIndex = 0
  @Output() setWeekDay = new EventEmitter<number>()
  @Output() setWeek = new EventEmitter<number>()
  @Input() $date : Observable<Date>
  private date: Date
  constructor() { }

  ngOnInit() {
    this.$date && this.$date.subscribe(date=>{
      this.date = date
      let copyDate
      let firstDayOfWeek
      this.days = []
      this.activeIndex = moment(date).weekday()
      for (let index = 0; index < 7; index++) {
        copyDate = date
        firstDayOfWeek = moment(copyDate).weekday(0)
        this.days.push(firstDayOfWeek.add('day', index).date())
      }
    })
  }

  handleWeekDay(_weekDay){
    this.setWeekDay.emit(_weekDay)
  }

  handlePrevWeek(){
    let week = moment(this.date).subtract('week', 1).week()
    this.setWeek.emit(week)
  }

  handleNextWeek(){
    let week = moment(this.date).add('week', 1).week()
    this.setWeek.emit(week)
  }

}

