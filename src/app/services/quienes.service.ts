import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IQuienes } from "../models/quienes";
@Injectable({
  providedIn: 'root'
})
export class QuienesService {

  constructor(private http:HttpClient) { }

  getQuienes()
  {
    return this.http.get<IQuienes[]>('https://fseno-backend.herokuapp.com/quienes');
  }

  getQuienesPublic()
  {
    return this.http.get<IQuienes[]>('https://fseno-backend.herokuapp.com/quienes-public');
  }

  saveQuienes(quienes:IQuienes)
  {
    return this.http.post('https://fseno-backend.herokuapp.com/quienes',quienes);
  }

  updateQuienes(quienes:IQuienes)
  {
    let id:number = quienes.id_qs;
    return this.http.put('https://fseno-backend.herokuapp.com/quienes/'+id,quienes);
  }

  deleteQuienes(id:number)
  {
    return this.http.delete('https://fseno-backend.herokuapp.com/quienes/'+id);
  }
}
