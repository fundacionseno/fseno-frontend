import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IDonaciones } from "../models/donaciones";

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  constructor(private http:HttpClient) { }

  getDonacion()
  {
    return this.http.get<IDonaciones[]>('https://fseno-backend.herokuapp.com/donaciones');
  }

  getDonacionPublic()
  {
    return this.http.get<IDonaciones[]>('https://fseno-backend.herokuapp.com/donaciones-public');
  }

  saveDonacion(unaDonacion:IDonaciones)
  {
    return this.http.post('https://fseno-backend.herokuapp.com/donaciones',unaDonacion);
  }

  updateDonacion(unaDonacion:IDonaciones)
  {
    let id:number = unaDonacion.id_donaciones;
    return this.http.put('https://fseno-backend.herokuapp.com/donaciones/'+id,unaDonacion);
  }

  deleteDonacion(id:number)
  {
    return this.http.delete('https://fseno-backend.herokuapp.com/donaciones/'+id);  
  }

}
