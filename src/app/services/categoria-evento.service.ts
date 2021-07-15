import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategoE } from "../models/categoria-evento";
import { IconOptions } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class CategoriaEventoService {

  constructor(private http:HttpClient) { }

  getCategoria()
  {
    return this.http.get<ICategoE[]>('https://fseno-backend.herokuapp.com/categoria_eventos');
  }

  saveCategoria(unaCatego:ICategoE)
  {
    return this.http.post('https://fseno-backend.herokuapp.com/categoria_eventos',unaCatego);
    
  }

  updateCategoria(unaCatego:ICategoE)
  {
    let id:number = unaCatego.id_categoria_eventos;
    return this.http.put('https://fseno-backend.herokuapp.com/categoria_eventos/'+id,unaCatego);
  }

  deleteCategoria(id:number)
  {
    return this.http.delete('https://fseno-backend.herokuapp.com/categoria_eventos/'+id);
  }

}

