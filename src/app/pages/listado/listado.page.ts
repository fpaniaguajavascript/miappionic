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
  peliculas:Pelicula[]=[];
  constructor(private ldbs:LocaldatabaseService){
    ldbs.getAllPeliculas().then(peliculasAlmacenadas => {
      this.peliculas = peliculasAlmacenadas;
      console.log(JSON.stringify(this.peliculas));
    });
  }
}
