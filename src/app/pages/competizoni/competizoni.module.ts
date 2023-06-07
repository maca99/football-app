import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetizoniPageRoutingModule } from './competizoni-routing.module';

import { CompetizoniPage } from './competizoni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetizoniPageRoutingModule
  ],
  declarations: [CompetizoniPage]
})
export class CompetizoniPageModule {}
