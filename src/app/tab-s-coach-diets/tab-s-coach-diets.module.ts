import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSCoachDietsPageRoutingModule } from './tab-s-coach-diets-routing.module';

import { TabSCoachDietsPage } from './tab-s-coach-diets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSCoachDietsPageRoutingModule
  ],
  declarations: [TabSCoachDietsPage]
})
export class TabSCoachDietsPageModule {}
