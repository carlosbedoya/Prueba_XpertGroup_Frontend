import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalificarComponent } from './Components/calificar/calificar.component';
import { CalificacionComponent } from './Components/calificacion/calificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CalificarComponent,
    CalificacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
