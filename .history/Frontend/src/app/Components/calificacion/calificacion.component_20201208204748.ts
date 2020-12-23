import { Component, OnInit } from '@angular/core';
import { CalificacionService } from '../../Services/calificacion.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

  cantidadEstrellas = []
  msjCalificacion = ""
  conversacion = ""

  constructor(private calificacionService : CalificacionService) { }

  ngOnInit() {
  }

  consultarConversacion(form: NgForm) {

    this.calificacionService.postCalificacion(form.value)
      .subscribe(res => {
        let response = res["calificacion"];
        //let response = res["calificar"];
        this.msjCalificacion = "El puntaje es de " + response.puntos + " puntos."

        this.cantidadEstrellas = []
        for (let index = 0; index < response.estrellas; index++) {
          this.cantidadEstrellas.push(index)
        }

      })

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }


}
