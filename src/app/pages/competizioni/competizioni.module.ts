import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetizioniPageRoutingModule } from './competizioni-routing.module';

import { CompetizioniPage } from './competizioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetizioniPageRoutingModule
  ],
  declarations: [CompetizioniPage]
})
export class CompetizioniPageModule {}
