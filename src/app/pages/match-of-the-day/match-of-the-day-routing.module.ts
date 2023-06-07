import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchOfTheDayPage } from './match-of-the-day.page';

const routes: Routes = [
  {
    path: '',
    component: MatchOfTheDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchOfTheDayPageRoutingModule {}
