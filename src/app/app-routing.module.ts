import { NgModule } from '@angular/core';
import { PreloadAllModules } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';


@NgModule({
  imports: [
  RouterModule.forRoot([
    { path: 'home', component:HomePage },
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
