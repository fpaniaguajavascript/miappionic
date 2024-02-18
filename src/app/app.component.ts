import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Búsqueda', url: '/formulario', icon: 'videocam' },
    { title: 'Info', url: '/listado', icon: 'alert' },
    { title: 'About', url: '/folder/favorites', icon: 'heart' },
  ];
  public labels = ['Acción', 'Romántica', 'Comedia', 'Terror'];
  constructor() {}
}
