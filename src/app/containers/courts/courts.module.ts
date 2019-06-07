import { NgModule } from '@angular/core';

import { CourtsComponent } from './courts.component';
// import { AppRoutingModule } from 'app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CourtsComponent],
  imports: [
    // AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  exports: [CourtsComponent],
})
export class CourtsModule { }
