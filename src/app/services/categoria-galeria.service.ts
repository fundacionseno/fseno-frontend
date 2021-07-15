import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategoria } from "../models/categoria_galeria";


@Injectable({
  providedIn: 'root'
})
export class CategoriaGaleriaService {

  constructor(private http:HttpClient) {

   }
   getCategoria()
  {
    return this.http.get<ICategoria[]>('https://fseno-backend.herokuapp.com/categoria_galeria');
  }

  saveCategoria(unaCategoria:ICategoria)
  {
    return this.http.post('https://fseno-backend.herokuapp.com/categoria_galeria',unaCategoria);
    
  }

  updateCategoria(unaCategoria:ICategoria)
  {
    let id:number = unaCategoria.id_categoria;
    return this.http.put('https://fseno-backend.herokuapp.com/categoria_galeria/'+id,unaCategoria);
  }

  deleteCategoria(id:number)
  {
    return this.http.delete('https://fseno-backend.herokuapp.com/categoria_galeria/'+id);
  }

}


