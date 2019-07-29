import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LANG } from 'src/theme/pt';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  @Output() setWeekDay = new EventEmitter<number>()
  @Input() selectable: boolean
  @Input() value: number
  public lang = LANG

  constructor() { }

  ngOnInit() {
  }

  handleWeekDay(_weekDay){
    this.value = _weekDay
    this.setWeekDay.emit(_weekDay)
  }

}
