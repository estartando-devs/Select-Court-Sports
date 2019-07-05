import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHoursComponent } from './my-hours.component';
import { ListMyHoursComponent } from './list-my-hours/list-my-hours.component';

@NgModule({
  declarations: [
    MyHoursComponent, 
    ListMyHoursComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyHoursModule { }
