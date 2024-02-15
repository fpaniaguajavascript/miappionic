import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { HttpdataService } from 'src/app/services/httpdata.service';
import { LocaldatabaseService } from 'src/app/services/localdatabase.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  bucle:string[]=new Array<string>(10);
  titulo: string = "";
  cargando: boolean = false;
  pelicula: Pelicula | any;
  constructor(private httpds: HttpdataService, private ldbs: LocaldatabaseService) {
  }

  ngOnInit() {
    console.log("formulario.page.ngOnInit...");
  }

  buscarPelicula() {
    let formulario = this;
    this.cargando = true;
    console.log("Buscando película...");
    this.httpds.getMovie(this.titulo).subscribe(
      ({
        next(retorno: Pelicula) {
          console.warn("La petición se ha resuelto satisfactoriamente");
          formulario.pelicula = retorno;
        },
        error(error: HttpErrorResponse) {
          console.error("Ha ocurrido un error:" + error.error);
        },
        complete() {
          console.log("Finalizado");
          formulario.cargando = false;
        }
      }));
  }

  guardarPelicula() {
    this.ldbs.guardarPelicula(this.pelicula);
  }

  buscarPeliculaExistente() {
    this.ldbs.getPelicula(this.titulo).subscribe(pelicula => {
      this.pelicula = pelicula;
    })
  }
}
