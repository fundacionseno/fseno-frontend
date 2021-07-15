import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProvincia } from "../models/provincia";

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http:HttpClient) { 

  }
  getProvincia()
  {
    return this.http.get<IProvincia[]>('https://fseno-backend.herokuapp.com/provincia');
  }

  saveProvincia(unaProvincia:IProvincia)
  {
    return this.http.post('https://fseno-backend.herokuapp.com/provincia',unaProvincia);
    
  }

  updateProvincia(unaProvincia:IProvincia)
  {
    let id:number = unaProvincia.id_provincia;
    return this.http.put('https://fseno-backend.herokuapp.com/provincia/'+id,unaProvincia);
  }

  deleteProvincia(id:number)
  {
    return this.http.delete('https://fseno-backend.herokuapp.com/provincia/'+id);
  }

}
