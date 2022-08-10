import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
    {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'home',
        loadChildren: ()=> import('../home/home.module').then(x =>  x.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: ()=> import('../search/search.module').then(x =>  x.SearchPageModule)
      },
      {
        path: 'profile',
        loadChildren: ()=> import('../profile/profile.module').then(x =>  x.ProfilePageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
