import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferitaPage } from './preferita.page';

const routes: Routes = [
  {
    path: '',
    component: PreferitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferitaPageRoutingModule {}
