import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiornataPageRoutingModule } from './giornata-routing.module';

import { GiornataPage } from './giornata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiornataPageRoutingModule
  ],
  declarations: [GiornataPage]
})
export class GiornataPageModule {}
