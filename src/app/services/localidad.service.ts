import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ILocalidad } from "../models/localidad";

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  constructor(private http:HttpClient) { 

  }
  getLocalidades(id_provincia:number)
  {
    return this.http.get<ILocalidad[]>('https://fseno-backend.herokuapp.com/localidades/'+id_provincia);
  }

  getLocalidad()
  {
    return this.http.get<ILocalidad[]>('https://fseno-backend.herokuapp.com/localidad');
  }
  saveLocalidad(unaLocalidad:ILocalidad)
  {
    return this.http.post('https://fseno-backend.herokuapp.com/localidad',unaLocalidad);
  }

  updateLocalidad(unaLocalidad:ILocalidad)
  {
    let id:number = unaLocalidad.id_localidad;
    return this.http.put('https://fseno-backend.herokuapp.com/localidad/'+id,unaLocalidad);
  }

  deleteLocalidad(id:number)
  {
    return this.http.delete('https://fseno-backend.herokuapp.com/localidad/'+id);
  }
}
