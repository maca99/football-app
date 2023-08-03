import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettaglioCompetizionePageRoutingModule } from './dettaglio-competizione-routing.module';

import { DettaglioCompetizionePage } from './dettaglio-competizione.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettaglioCompetizionePageRoutingModule
  ],
  declarations: [DettaglioCompetizionePage]
})
export class DettaglioCompetizionePageModule {}
