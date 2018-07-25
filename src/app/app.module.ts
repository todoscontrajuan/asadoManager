import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsadoListaComponent } from './dashboard/asado-lista/asado-lista.component';
import { AsadoItemComponent } from './dashboard/asado-lista/asado-item/asado-item.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AsadoDetalleComponent } from './dashboard/asado-lista/asado-item/asado-detalle/asado-detalle.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgForm, FormsModule } from '@angular/forms';
import { AddAsadoComponent } from './dashboard/add-asado/add-asado.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AsadoListaComponent,
    AsadoItemComponent,
    AsadoDetalleComponent,
    LoginComponent,
    RegisterComponent,
    AddAsadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: environment.apiKey,
      authDomain: "asado-manager-3dd42.firebaseapp.com",
      databaseURL: "https://asado-manager-3dd42.firebaseio.com",
      projectId: "asado-manager-3dd42",
      storageBucket: "asado-manager-3dd42.appspot.com",
      messagingSenderId: "164226282017"
    }),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
