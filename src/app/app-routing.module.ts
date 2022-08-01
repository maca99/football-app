import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'notizie',
    loadChildren: () => import('./notizie/notizie.module').then( m => m.NotiziePageModule)
  },
  {
    path: 'competizioni',
    loadChildren: () => import('./competizioni/competizioni.module').then( m => m.CompetizioniPageModule)
  },
  {
    path: 'preferita',
    loadChildren: () => import('./preferita/preferita.module').then( m => m.PreferitaPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
