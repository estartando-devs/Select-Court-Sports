import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from 'containers/home/home.module';
import { WprogressModule } from 'containers/wprogress/wprogress.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CourtsModule } from 'containers/courts/courts.module'

// To formGroup
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from 'components/form/form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    WprogressModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    FormModule,
    CourtsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
