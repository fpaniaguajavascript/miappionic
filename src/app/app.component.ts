import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Búsqueda', url: '/formulario', icon: 'search' },
    { title: 'Películas', url: '/listado/All', icon: 'film' },
    { title: 'About', url: '/about', icon: 'finger-print' },
  ];
  public labels = [
    {label:'Action', url:'/listado/Action', icon:'bicycle'},
    {label:'Horror', url:'/listado/Horror', icon:'skull'},
    {label:'Fantasy', url:'/listado/Fantasy', icon:'diamond'},
    {label:'Adventure', url:'/listado/Adventure', icon:'color-wand'},
  ];
  constructor() {}
}
