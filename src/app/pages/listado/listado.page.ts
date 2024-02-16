import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { HttpdataService } from 'src/app/services/httpdata.service';
import { LocaldatabaseService } from 'src/app/services/localdatabase.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage  {
  titulo:string="";
  peliculas:Pelicula[]=[];
  peliculasOriginales:Pelicula[]=[];
  constructor(private ldbs:LocaldatabaseService){
    ldbs.getAllPeliculas().then(peliculasAlmacenadas => {
      this.peliculas = peliculasAlmacenadas;
      this.peliculasOriginales = peliculasAlmacenadas;
    });
  }
  filtrar(){
    console.log("Filtrando...");
    this.peliculas = 
      this.peliculasOriginales.filter((p:Pelicula)=>
        p.Title.toLowerCase().includes(this.titulo.trim().toLowerCase()));
  }
  editar(titulo:string){
    console.log("Editando " + titulo);
  }
  borrar(titulo:string){
    console.log("Borrando " + titulo);
  }
}
