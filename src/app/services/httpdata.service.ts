import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula';
import { OMDB_API_KEY } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpdataService {
  static URL = "http://www.omdbapi.com/";
  constructor(private clienteHttp:HttpClient) { }
  getMovie(titulo:string) {
    const parametros = new HttpParams().
      append('apikey', OMDB_API_KEY).
      append('t', titulo);
    return this.clienteHttp?.get<Pelicula>(HttpdataService.URL, {params:parametros});//Devuelve un Observable
  }
}
