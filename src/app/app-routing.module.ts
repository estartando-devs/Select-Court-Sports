import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { WprogressComponent } from './containers/wprogress/wprogress.component';
import { CourtsComponent } from './containers/courts/courts.component';
import { LoginModule } from './containers/login/login.module';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { AuthGuardReverseService } from './core/guard/auth-guard-reverse.service';
import { ContactComponent } from './containers/contact/contact.component';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { ScheduleModule } from './containers/schedule/schedule.module';
import { WeekDayComponent } from './containers/schedule/week-day/week-day.component';
import { MyHoursModule } from './containers/my-hours/my-hours.module';
import { MyHoursComponent } from './containers/my-hours/my-hours.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", canActivate: [AuthGuardReverseService],loadChildren: () => import('./containers/login/login.module').then(mod => mod.LoginModule)},
  {path:"home",component: HomeComponent},
  {path: "test-service", component: CourtsComponent, canActivate: [AuthGuardService]},
  {path: "contact", component: ContactComponent},
  {path: "schedule", component: ScheduleComponent},
  // {path: "day", component: WeekDayComponent}
  {path: "schedule", component: ScheduleComponent},
  {path: "myhours", component: MyHoursComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ScheduleModule,
  MyHoursModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
