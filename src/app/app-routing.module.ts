import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { WprogressComponent } from './containers/wprogress/wprogress.component';
import { CourtsComponent } from './containers/courts/courts.component';
import { LoginModule } from './containers/login/login.module';
import { AuthGuardService } from 'services/auth-guard.service';

const routes: Routes = [
  {path: "", component: WprogressComponent},
  {path: "login",loadChildren: () => import('./containers/login/login.module').then(mod => mod.LoginModule)},
  {path:"home",component: HomeComponent},
  {path: "test-service", component: CourtsComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
