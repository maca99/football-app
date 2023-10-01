import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampionatoPage } from './campionato.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'campionato', // Reindirizza direttamente alla pagina 'campionato' all'avvio
    pathMatch: 'full'
  },
  {
    path: 'campionato',
    component: CampionatoPage,
    children: [
      {
        path: 'marcatori',
        loadChildren: () => import('../marcatori/marcatori.module').then( m => m.MarcatoriPageModule)
      },
      {
        path: 'giornata',
        loadChildren: () => import('../giornata/giornata.module').then(m => m.GiornataPageModule)
      },
      {
        path: 'classifica',
        loadChildren: () => import('../classifica/classifica.module').then(m => m.ClassificaPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampionatoPageRoutingModule {}
