import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiornatePage } from './giornate.page';

const routes: Routes = [
  {
    path: '',
    component: GiornatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiornatePageRoutingModule {}
