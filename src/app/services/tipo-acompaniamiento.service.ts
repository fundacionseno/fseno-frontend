import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IAcomp } from "../models/tipo_acompaniamiento";
@Injectable({
  providedIn: 'root'
})
export class TipoAcompaniamientoService {

  constructor(private http:HttpClient) {
    
   }
   getAcomp()
  {
    return this.http.get<IAcomp[]>('https://fseno-backend.herokuapp.com/acompaniamiento');
  }

  saveAcomp(unAcomp:IAcomp)
  {
    return this.http.post('https://fseno-backend.herokuapp.com/acompaniamiento',unAcomp);
    
  }

  updateAcomp(unAcomp:IAcomp)
  {
    let id:number = unAcomp.id_acomp;
    return this.http.put('https://fseno-backend.herokuapp.com/acompaniamiento/'+id,unAcomp);
  }

  deleteAcomp(id:number)
  {
    return this.http.delete('https://fseno-backend.herokuapp.com/acompaniamiento/'+id);
  }
}
