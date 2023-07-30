import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetizoniPage } from './competizoni.page';

const routes: Routes = [
  {
    path: '',
    component: CompetizoniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetizoniPageRoutingModule {}
