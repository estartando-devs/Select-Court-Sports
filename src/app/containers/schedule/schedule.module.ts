import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekComponent } from './week/week.component';
import { ListComponent } from './list/list.component';
import { ScheduleComponent } from './schedule.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { TurnComponent } from './turn/turn.component';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { SelectMonthComponent } from './select-month/select-month.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    WeekComponent,
    ListComponent,
    TurnComponent,
    SelectMonthComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ModalModule
  ]
})
export class ScheduleModule { }
