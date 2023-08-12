import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';


const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {path: 'zone',
  loadChildren: () => import('./pages/Zone/zone.module').then( m => m.ZonePageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./pages/favourite/favourite.module').then( m => m.FavouritePageModule)
  },
  {
    path: 'match-of-the-day',
    loadChildren: () => import('./pages/match-of-the-day/match-of-the-day.module').then( m => m.MatchOfTheDayPageModule)
  },
  {
    path: 'list-news',
    loadChildren: () => import('./pages/list-news/list-news.module').then( m => m.ListNewsPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'dettaglio-competizione/:id',
    loadChildren: () => import("./pages/dettaglio-competizione/dettaglio-competizione.module").then(m => m.DettaglioCompetizionePageModule)
  },
  {
    path: 'campionato',
    loadChildren: () => import('./pages/campionato/campionato.module').then( m => m.CampionatoPageModule)
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
