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
  {path: 'competizioni',
  loadChildren: () => import('./pages/competizoni/competizoni.module').then( m => m.CompetizoniPageModule)
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
    path: 'dettaglio-competizione',
    loadChildren: () => import('./pages/dettaglio-competizione/dettaglio-competizione.module').then( m => m.DettaglioCompetizionePageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
