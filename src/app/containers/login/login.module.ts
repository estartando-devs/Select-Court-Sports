import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormModule } from '../../modules/form/form.module';
import { RegisterComponent } from './register/register.component';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormModule,
    ModalModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
