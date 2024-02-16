import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listado/All',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then(m => m.FormularioPageModule)
  },
  {
    path: 'listado/:genero',
    loadChildren: () => import('./pages/listado/listado.module').then(m => m.ListadoPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
