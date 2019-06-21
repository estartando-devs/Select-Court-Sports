import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header.component';
import { ScheduleComponent } from 'src/app/containers/schedule/schedule.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    ScheduleComponent
  ],
  imports: [CommonModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }
