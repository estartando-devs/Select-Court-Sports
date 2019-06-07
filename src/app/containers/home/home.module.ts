import { NgModule } from '@angular/core';

import { HomeComponent } from 'src/app/containers/home/home.component'
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderModule } from 'components/header/header.module';
@NgModule({
  imports: [
    AppRoutingModule,
    HeaderModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
