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

  //CONFIRMACIÓN DE BORRADO - START
  public deleteButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Cancelando borrado');
        this.confirmDeleteOpen=false;
      }
    },
    {
      text: 'Borrar',
      role: 'confirm',
      handler: () => {
        console.log('Borrando pelicula');
        this.confirmDeleteOpen=false;
        this.ldbs.borrarPelicula(this.tituloPeliculaABorrar).subscribe(
          value => this.recuperarPeliculas()
        );
      },
    },
  ];
  public confirmDeleteOpen:boolean=false;
  public tituloPeliculaABorrar:string="";
  //CONFIRMACIÓN DE BORRADO - END
  titulo:string="";
  peliculas:Pelicula[]=[];
  peliculasOriginales:Pelicula[]=[];
  constructor(private ldbs:LocaldatabaseService){
    this.recuperarPeliculas();
  }
  private recuperarPeliculas(){
    this.ldbs.getAllPeliculas().then(peliculasAlmacenadas => {
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
    this.tituloPeliculaABorrar=titulo;
    this.confirmDeleteOpen=true;
  }
  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
}
