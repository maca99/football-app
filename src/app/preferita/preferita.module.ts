import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferitaPageRoutingModule } from './preferita-routing.module';

import { PreferitaPage } from './preferita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferitaPageRoutingModule
  ],
  declarations: [PreferitaPage]
})
export class PreferitaPageModule {}
