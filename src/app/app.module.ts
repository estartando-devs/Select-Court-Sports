import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './containers/home/home.module';
import { WprogressModule } from './containers/wprogress/wprogress.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CourtsModule } from './containers/courts/courts.module'
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component'

// To formGroup
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    WprogressModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    CourtsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
