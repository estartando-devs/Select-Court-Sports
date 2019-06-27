import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekComponent } from './week/week.component';
import { ListComponent } from './list/list.component';
import { ScheduleComponent } from './schedule.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { TurnComponent } from './turn/turn.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    WeekComponent,
    ListComponent,
    TurnComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class ScheduleModule { }
