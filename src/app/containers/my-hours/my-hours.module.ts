import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHoursComponent } from './my-hours.component';
import { ListMyHoursComponent } from './list-my-hours/list-my-hours.component';
import { MyHoursRoutingModule } from './my-hours-routing.module';

@NgModule({
  declarations: [
    MyHoursComponent, 
    ListMyHoursComponent
  ],
  imports: [
    CommonModule,
    MyHoursRoutingModule
  ]
})
export class MyHoursModule { }
