import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettaglioCompetizionePage } from './dettaglio-competizione.page';

const routes: Routes = [
  {
    path: '',
    component: DettaglioCompetizionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettaglioCompetizionePageRoutingModule {}
