import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RisultatoPage } from './risultato.page';

const routes: Routes = [
  {
    path: '',
    component: RisultatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RisultatoPageRoutingModule {}
