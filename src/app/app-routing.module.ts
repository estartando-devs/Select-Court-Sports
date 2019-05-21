import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { WprogressComponent } from './containers/wprogress/wprogress.component';
import { CourtsComponent } from './containers/courts/courts.component';

const routes: Routes = [
  {path: "", component: WprogressComponent},
  {path:"home",component: HomeComponent},
  {path: "test-service", component: CourtsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
