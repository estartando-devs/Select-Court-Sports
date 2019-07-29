import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsAdmComponent } from './options-adm/options-adm.component';
import { FormModule } from 'src/app/modules/form/form.module';
import { CalendarModule } from 'src/app/modules/calendar/calendar.module';
import { ManagerScheduleComponent } from './manager-schedule.component';
import { ManagerScheduleRoutingModule } from './manager-schedule-routing.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  declarations: [
    ManagerScheduleComponent,
    OptionsAdmComponent
  ],
  imports: [
    ManagerScheduleRoutingModule,
    CommonModule,
    FormModule,
    CalendarModule,
    HeaderModule
  ]
})
export class ManagerScheduleModule { }
