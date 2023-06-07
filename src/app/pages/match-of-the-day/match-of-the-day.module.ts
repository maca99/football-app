import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchOfTheDayPageRoutingModule } from './match-of-the-day-routing.module';

import { MatchOfTheDayPage } from './match-of-the-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchOfTheDayPageRoutingModule
  ],
  declarations: [MatchOfTheDayPage]
})
export class MatchOfTheDayPageModule {}
