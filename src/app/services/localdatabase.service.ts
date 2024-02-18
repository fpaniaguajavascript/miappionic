import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

const NODO_RAIZ = "peliculas";

@Injectable({
  providedIn: 'root'
})
export class LocaldatabaseService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this.storage = await this.storage.create();
  }

  guardarPelicula(pelicula: Pelicula) {
    this.storage.get(NODO_RAIZ).
      then((data) => {
        if (data == null) {
          let peliculas = new Array();
          peliculas.push(pelicula);
          this.storage.set(NODO_RAIZ, peliculas);
        } else {
          let peliculas = data;
          peliculas.push(pelicula);
          this.storage.set(NODO_RAIZ, peliculas);
        }
      }).
      catch((error) => {
        console.error("Error:" + error);
      }).
      finally(() => {
        console.log("Fin del proceso de almacenamiento");
      });
  }

  getPelicula(titulo: string) : Observable<Pelicula>{
    return new Observable(subscriber=>{
      this.storage.get(NODO_RAIZ).then((peliculas) => {
        if (peliculas!=null){
          let pelicula = peliculas.find((p: Pelicula) => p.Title == titulo);
          subscriber.next(pelicula);
          subscriber.complete();
        } else {
          subscriber.error("No existen películas en la base de datos");
          subscriber.complete();
        }
      })});
  }

  getAllPeliculas() {
    return this.storage.get(NODO_RAIZ);
  }

  //Solución al problema de la asincronía
  borrarPelicula(titulo: string) : Observable<any>{
    return new Observable(subscriber=> {
      this.getAllPeliculas().then((peliculas:Pelicula[])=>{
        peliculas.splice(peliculas.findIndex(pelicula=>pelicula.Title==titulo),1);
        this.storage.set(NODO_RAIZ, peliculas).then(()=>{
          subscriber.next();
          subscriber.complete();
        });
      });
    })
  }

  //Problema de asincronía
  /*
  borrarPelicula(titulo: string){
    this.getAllPeliculas().then((peliculas:Pelicula[])=>{
      peliculas.splice(peliculas.findIndex(pelicula=>pelicula.Title==titulo),1);
      this.storage.set(NODO_RAIZ, peliculas);
    });
  }
  */
}
