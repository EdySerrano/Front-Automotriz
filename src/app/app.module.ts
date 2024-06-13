// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Asegúrate de que esta línea esté correctamente importada
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { RegisterOstComponent } from './register-ost/register-ost.component';
import { OstDetailsComponent } from './ost-details/ost-details.component';
import { ProblemLogComponent } from './problem-log/problem-log.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent, // Asegúrate de que AppComponent esté declarado aquí
    HomeComponent,
    RegisterOstComponent,
    OstDetailsComponent,
    ProblemLogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'register-ost', component: RegisterOstComponent },
      { path: 'ost-details', component: OstDetailsComponent },
      { path: 'problem-log', component: ProblemLogComponent }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent] // Asegúrate de que AppComponent esté aquí
})
export class AppModule { }
