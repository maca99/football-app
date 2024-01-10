import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RisultatoPageRoutingModule } from './risultato-routing.module';

import { RisultatoPage } from './risultato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RisultatoPageRoutingModule
  ],
  declarations: [RisultatoPage]
})
export class RisultatoPageModule {}
