import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormModule } from 'src/app/modules/form/form.module';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
// import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    // ContactRoutingModule,
    FormModule,
    ModalModule
  ],
})
export class ContactModule { }
