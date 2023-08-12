import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampionatoPageRoutingModule } from './campionato-routing.module';

import { CampionatoPage } from './campionato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampionatoPageRoutingModule
  ],
  declarations: [CampionatoPage]
})
export class CampionatoPageModule {}
