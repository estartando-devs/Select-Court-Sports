import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnComponent } from './turn/turn.component';
import { WeekComponent } from './week/week.component';
import { SelectMonthComponent } from './select-month/select-month.component';
import { WeekDayComponent } from './week-day/week-day.component';

@NgModule({
  declarations: [
    TurnComponent,
    WeekComponent,
    SelectMonthComponent,
    WeekDayComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TurnComponent,
    WeekComponent,
    SelectMonthComponent,
    WeekDayComponent
  ]
})
export class CalendarModule { }
