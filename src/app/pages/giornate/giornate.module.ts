import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiornatePageRoutingModule } from './giornate-routing.module';

import { GiornatePage } from './giornate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiornatePageRoutingModule
  ],
  declarations: [GiornatePage]
})
export class GiornatePageModule {}
