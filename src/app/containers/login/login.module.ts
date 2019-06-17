import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormModule } from '../../modules/form/form.module';
import { RegisterComponent } from './register/register.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormModule
  ]
})
export class LoginModule { }
