import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekComponent } from './week/week.component';
import { ListComponent } from './list/list.component';
import { ScheduleComponent } from './schedule.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    WeekComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScheduleModule { }
