import { NgModule } from '@angular/core';

import { HomeComponent } from 'src/app/containers/home/home.component'
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
  imports: [
    AppRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
