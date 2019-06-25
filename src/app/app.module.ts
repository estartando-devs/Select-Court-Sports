import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { WprogressModule } from './containers/wprogress/wprogress.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CourtsModule } from './containers/courts/courts.module'

// To formGroup
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from './modules/form/form.module';
import { AuthService } from './core/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { HeaderModule } from './shared/components/header/header.module';
import { CalendarComponent } from './shared/components/calendar/calendar.component';
import { ContactModule } from './containers/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WprogressModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    FormModule,
    HeaderModule,
    CourtsModule,
    ReactiveFormsModule,
    ContactModule
  ],
  providers: [AuthService, AngularFireAuth, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
