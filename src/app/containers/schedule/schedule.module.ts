import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ScheduleComponent } from './schedule.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { CalendarModule } from 'src/app/modules/calendar/calendar.module';

@NgModule({
  declarations: [
    ScheduleComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    HeaderModule,
    ModalModule,
    CalendarModule
  ]
})
export class ScheduleModule { }
