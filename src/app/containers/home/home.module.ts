import { NgModule } from '@angular/core';

import { HomeComponent } from 'src/app/containers/home/home.component'
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderModule } from 'components/header/header.module';
import { FormModule } from 'modules/form/form.module';
@NgModule({
  imports: [
    AppRoutingModule,
    HeaderModule,
    FormModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
