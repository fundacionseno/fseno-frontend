import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { formatDate } from '@angular/common';
import { ICuidados } from "../models/cuidados";
import { ICuidadosDetalle } from "../models/cuidadosDetalle";

@Injectable({
  providedIn: 'root'
})
export class CuidadosService {

  constructor(private http:HttpClient) { }

  updateCuidados(cuidados:ICuidados)
  {
    let id_cuidados = cuidados.id_cuidados;
    return this.http.put('https://fseno-backend.herokuapp.com/cuidados/'+id_cuidados,cuidados);
  }

  saveCuidados(unCuidados:ICuidados,files:FileList){
    const fd = new FormData();

    fd.append('titulo',unCuidados.titulo);
    fd.append('descripcion',unCuidados.descripcion);

    for (let index = 0; index < files.length; index++) {
      fd.append('img_cuidados',files[index]);
    }

    return this.http.post('https://fseno-backend.herokuapp.com/cuidados',fd)
  }

  getCuidados()
  {
    return this.http.get<ICuidados[]>('https://fseno-backend.herokuapp.com/cuidados');
  }

  getImageCuidados(id_cuidados:number)
  {
    return this.http.get<ICuidadosDetalle[]>('https://fseno-backend.herokuapp.com/cuidados-imagenes/'+id_cuidados);
  }

  addImageCuidados(id_cuidados:number,files:FileList)
  {
    const fd = new FormData();

    for (let index = 0; index < files.length; index++) {
      fd.append('img_cuidados',files[index]);
    }
    return this.http.put('https://fseno-backend.herokuapp.com/agregar-imagenes-cuidados/'+id_cuidados,fd);
  }
  
  deleteImageCuidados(id_img_cuidados:number, public_id:string)
  {
    return this.http.delete('https://fseno-backend.herokuapp.com/detalles-imagen-cuidados/'+id_img_cuidados+'/'+public_id)
  }

  deleteCuidados(id_cuidados:number)
  {
    return this.http.delete('https://fseno-backend.herokuapp.com/cuidados/'+id_cuidados);
  }

  //metodo  encargado de editar un registro y poner la portada en estado 0(cero)
  assingPortada(id_img_cuidados:number,id_cuidados:number)
  {
    return this.http.get('https://fseno-backend.herokuapp.com/cuidados-portada/'+id_img_cuidados+'/'+id_cuidados);
  }
}


