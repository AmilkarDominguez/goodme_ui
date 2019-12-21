import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCDietsPageRoutingModule } from './tab-c-diets-routing.module';

import { TabCDietsPage } from './tab-c-diets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCDietsPageRoutingModule
  ],
  declarations: [TabCDietsPage]
})
export class TabCDietsPageModule {}
