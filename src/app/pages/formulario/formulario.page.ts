import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { HttpdataService } from 'src/app/services/httpdata.service';
import { LocaldatabaseService } from 'src/app/services/localdatabase.service';

const OUTLINE = "heart-outline";
const FILLED = "heart";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  mensajeVisible:boolean=false;
  botonCierre = ['Aceptar'];
  
  mensaje={
    header:"SuperMovies",
    subHeader:"Búsqueda",
    message:""
  }

  titulo: string = "";
  cargando: boolean = false;
  pelicula: Pelicula | any;

  iconos:string[]=[OUTLINE,OUTLINE,OUTLINE,OUTLINE,OUTLINE];

  constructor(private httpds: HttpdataService, private ldbs: LocaldatabaseService) {
    this.valorar(0);
  }

  setOpen(open:boolean){
    this.mensajeVisible=open;
  }

  ngOnInit() {
    console.log("formulario.page.ngOnInit...");
  }

  mostrarMensaje(mensaje:string){
    this.mensaje.message=mensaje;
    this.setOpen(true);
  }

  buscarPelicula() {
    this.ldbs.getPelicula(this.titulo).subscribe({
      next:pelicula => {
        if(pelicula!=undefined){
          this.pelicula = pelicula;
          this.mostrarMensaje("La película ha sido encontrada en el almacenamiento local");
        } else {
          this.buscarPeliculaOMDB();
        }
      },
      error:e => {
        console.error("Ha ocurrido un error al tratar de obtener la base de datos");
        this.buscarPeliculaOMDB();
      },
      complete:() =>{
        //NADA
      }
    });
  }

  private buscarPeliculaOMDB() {
    let formulario = this;
    this.cargando = true;
    console.log("Buscando película...");
    this.httpds.getMovie(this.titulo).subscribe(
      ({
        next(retorno: Pelicula) {
          console.warn("La petición se ha resuelto satisfactoriamente");
          formulario.pelicula = retorno;
          formulario.mostrarMensaje("La película ha sido encontrada en OMDB");
        },
        error(error: HttpErrorResponse) {
          console.error("Ha ocurrido un error:" + error.error);
          formulario.mostrarMensaje("Ha ocurrido un error al acceder a OMDB");
        },
        complete() {
          console.log("Finalizado");
          formulario.cargando = false;
        }
      }));
  }

  guardarPelicula() {
    this.ldbs.guardarPelicula(this.pelicula);
    this.pelicula=null;
    this.titulo="";
  }

  
  valorar(valor:number){
    if (!this.pelicula) return;
    this.pelicula.MyRating=valor;
    for(let i=0;i<this.iconos.length;i++){
      if (i<=this.pelicula.MyRating){
        this.iconos[i]=FILLED;
      } else {
        this.iconos[i]=OUTLINE;
      }
    }
  }
  
  /*
  buscarPeliculaExistente() {
    this.ldbs.getAllPeliculas().then(peliculas=>{
      this.pelicula = peliculas.find((pelicula:Pelicula) => pelicula.Title == this.titulo);
    })
  }
  */
}
