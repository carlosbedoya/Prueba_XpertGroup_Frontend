import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  API_URL = 'http://localhost:3007/api/calificar';
  // CONSUMIR API

  constructor(private http: HttpClient) {
  }


  //Calificacion
  postCalificacion(body: any) {

    console.log(body)
    return this.http.post(`${this.API_URL}`, body)
  }

}
