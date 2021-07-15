import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICatDon } from "../models/categoria_donaciones";

@Injectable({
  providedIn: 'root'
})
export class CategoriaDonacionesService {

  constructor(private http:HttpClient) { 

  }
  getCategoriaDon()
  {
    return this.http.get<ICatDon[]>('https://fseno-backend.herokuapp.com/categoria_donaciones');
  }

  saveCategoriaDon(unaCategoD:ICatDon)
  {
    return this.http.post('https://fseno-backend.herokuapp.com/categoria_donaciones',unaCategoD);
  }

  updateCategoriaDon(unaCategoD:ICatDon)
  {
    let id:number = unaCategoD.id_categoria_donaciones;
    return this.http.put('https://fseno-backend.herokuapp.com/categoria_donaciones/'+id,unaCategoD);
  }

  deleteCategoriaD(id:number)
  {
    return this.http.delete('https://fseno-backend.herokuapp.com/categoria_donaciones/'+id);
  }
}
