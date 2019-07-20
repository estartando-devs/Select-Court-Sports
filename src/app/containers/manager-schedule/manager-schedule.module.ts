import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsAdmComponent } from './options-adm/options-adm.component';
import { FormModule } from 'src/app/modules/form/form.module';

@NgModule({
  declarations: [
    OptionsAdmComponent
  ],
  imports: [
    CommonModule,
    FormModule
  ]
})
export class ManagerScheduleModule { }
