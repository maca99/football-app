import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';


const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
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
    path: 'competition',
    loadChildren: () => import("./pages/competition/competition.module").then(m => m.CompetitonPageModule)
  },
  {
    path: 'campionato/:id', 
    loadChildren: () => import('./pages/campionato/campionato.module').then(m => m.CampionatoPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'risultato/:id',
    loadChildren: () => import('./pages/risultato/risultato.module').then( m => m.RisultatoPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
