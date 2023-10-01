import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiornataPage } from './giornata.page';

const routes: Routes = [
  {
    path: '',
    component: GiornataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiornataPageRoutingModule {}
