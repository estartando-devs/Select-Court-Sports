import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHoursComponent } from './my-hours.component';

const routes: Routes = [
  {path: "", component: MyHoursComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class MyHoursRoutingModule { }
