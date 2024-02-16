import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Búsqueda', url: '/formulario', icon: 'search' },
    { title: 'Películas', url: '/listado', icon: 'film' },
    { title: 'About', url: '/folder/favorites', icon: 'finger-print' },
  ];
  public labels = ['Acción', 'Romántica', 'Comedia', 'Terror'];
  constructor() {}
}
