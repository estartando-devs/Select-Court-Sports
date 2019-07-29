import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerScheduleComponent } from './manager-schedule.component';

const routes: Routes = [
  {path: "", component: ManagerScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ManagerScheduleRoutingModule { }
