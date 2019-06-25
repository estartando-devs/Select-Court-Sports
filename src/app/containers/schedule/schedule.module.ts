import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekComponent } from './week/week.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    WeekComponent, 
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ScheduleModule { }
