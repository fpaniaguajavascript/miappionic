import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Búsqueda', url: '/formulario/None', icon: 'search' },
    { title: 'Películas', url: '/listado/All', icon: 'film' },
    { title: 'About', url: '/about', icon: 'finger-print' },
  ];
  public labels = [
    {label:'Acción', url:'/listado/Action', icon:'bicycle'},
    {label:'Terror', url:'/listado/Horror', icon:'skull'},
    {label:'Fantasía', url:'/listado/Fantasy', icon:'diamond'},
    {label:'Ciencia ficción', url:'/listado/Sci-Fi', icon:'color-wand'},
    {label:'Drama', url:'/listado/Drama', icon:'eye'},
    {label:'Aventuras', url:'/listado/Adventure', icon:'paw'},
    {label:'Comedia', url:'/listado/Comedy', icon:'happy'},
  ];
  constructor() {}
}
