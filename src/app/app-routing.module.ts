import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { WprogressComponent } from './containers/wprogress/wprogress.component';
import { CourtsComponent } from './containers/courts/courts.component';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { AuthGuardReverseService } from './core/guard/auth-guard-reverse.service';
import { ScheduleModule } from './containers/schedule/schedule.module';
import { MyHoursModule } from './containers/my-hours/my-hours.module';
<<<<<<< HEAD
import { MyHoursComponent } from './containers/my-hours/my-hours.component';
=======
>>>>>>> develop
import { ManagerScheduleComponent } from './containers/manager-schedule/manager-schedule.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {path:"home",component: HomeComponent},
  {path: "login", canActivate: [AuthGuardReverseService],loadChildren: () => import('./containers/login/login.module').then(mod => mod.LoginModule)},
  {path: "contato", loadChildren: () => import('./containers/contact/contact.module').then(contact => contact.ContactModule)},
  {path: "fazeragendamento", loadChildren: () => import('./containers/schedule/schedule.module').then(()=> ScheduleModule)},
  {path: "meushorarios", loadChildren: () => import('./containers/my-hours/my-hours.module').then(() => MyHoursModule)},
<<<<<<< HEAD
  // {path: "test-service", component: CourtsComponent, canActivate: [AuthGuardService]}
=======
>>>>>>> develop
  {path: "admin", component: ManagerScheduleComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
