import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSDietsPageRoutingModule } from './tab-s-diets-routing.module';

import { TabSDietsPage } from './tab-s-diets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSDietsPageRoutingModule
  ],
  declarations: [TabSDietsPage]
})
export class TabSDietsPageModule {}
