import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { CompetizoniPage } from './pages/competizoni/competizoni.page';

const routes: Routes = [
  {path: 'competizioni', component: CompetizoniPage },
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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
