import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcatoriPageRoutingModule } from './marcatori-routing.module';

import { MarcatoriPage } from './marcatori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcatoriPageRoutingModule
  ],
  declarations: [MarcatoriPage]
})
export class MarcatoriPageModule {}
