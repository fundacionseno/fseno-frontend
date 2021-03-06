import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IGaleria } from "../models/galeria";
import { IGaleriaDetalle } from "src/app/models/galeria_detalle";

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor(private http:HttpClient) {
   }

   updateGaleria(galeria:IGaleria)
   {
     let id_galeria = galeria.id_galeria;
     return this.http.put('https://fseno-backend.herokuapp.com/galeria/'+id_galeria,galeria);
   }

   saveGaleria(datosGaleria:IGaleria, files:FileList)
   {
     const fd = new FormData();

     fd.append('descripcion',datosGaleria.descripcion);
     fd.append('fecha',datosGaleria.fecha);
     fd.append('localidad',datosGaleria.localidad);
     fd.append('categoria',datosGaleria.categoria);
     fd.append('tipo',datosGaleria.tipo);
     fd.append('estado_home',datosGaleria.estado_home);
     
    for (let index = 0; index < files.length; index++) {   
      fd.append('img_galeria',files[index])
    }

     return this.http.post('https://fseno-backend.herokuapp.com/galeria',fd);
   }

   getGaleria()
   {
     return this.http.get<IGaleria[]>('https://fseno-backend.herokuapp.com/galeria');
   }

   getGaleriaPublic()
   {
     return this.http.get<IGaleria[]>('https://fseno-backend.herokuapp.com/galeria-public');
   }

   getImageGaleria(id_galeria:number)
   {
     return this.http.get<IGaleriaDetalle[]>('https://fseno-backend.herokuapp.com/galeria-imagenes/'+id_galeria)
   }

   addImageGaleria(id_galeria:number, files:FileList)
   {
    const fd = new FormData();

    for (let index = 0; index < files.length; index++) {
      fd.append('img_galeria',files[index]);  
    }

    return this.http.put('https://fseno-backend.herokuapp.com/agregar-imagenes-galeria/'+id_galeria,fd);
   }

   deleteImageGaleria(id_img_galeria:number,public_id:string)
   {
    return this.http.delete('https://fseno-backend.herokuapp.com/detalles-imagen-galeria/'+id_img_galeria+'/'+public_id);
   }

   deleteGaleria(id_galeria:number)
   {
    return this.http.delete('https://fseno-backend.herokuapp.com/galeria/'+id_galeria);
   }

    //metodo  encargado de editar un registro y poner la portada en estado 0(cero)
  assingPortada(id_img_galeria:number,id_galeria:number)
  {
    return this.http.get('https://fseno-backend.herokuapp.com/galeria-portada/'+id_img_galeria+'/'+id_galeria);
  }
}
