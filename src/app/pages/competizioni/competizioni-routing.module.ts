import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetizioniPage } from './competizioni.page';

const routes: Routes = [
  {
    path: '',
    component: CompetizioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetizioniPageRoutingModule {}
