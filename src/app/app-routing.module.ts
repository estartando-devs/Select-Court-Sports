import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { WprogressComponent } from './containers/wprogress/wprogress.component';
import { CourtsComponent } from './containers/courts/courts.component';
import { LoginModule } from './containers/login/login.module';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { AuthGuardReverseService } from './core/guard/auth-guard-reverse.service';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", canActivate: [AuthGuardReverseService],loadChildren: () => import('./containers/login/login.module').then(mod => mod.LoginModule)},
  {path:"home",component: HomeComponent},
  {path: "test-service", component: CourtsComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
