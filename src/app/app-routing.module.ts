import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificacionComponent } from './Components/calificacion/calificacion.component'

const routes: Routes = [

    { path: '**', component: CalificacionComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
