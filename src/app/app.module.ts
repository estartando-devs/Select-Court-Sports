import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'containers/home/home.component';
import { WprogressModule } from 'containers/wprogress/wprogress.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CourtsModule } from 'containers/courts/courts.module'

// To formGroup
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from 'modules/form/form.module';
import { AuthService } from 'auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthGuardService } from 'guard/auth-guard.service';
import { HeaderModule } from 'components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
    ReactiveFormsModule
  ],
  providers: [AuthService, AngularFireAuth, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
