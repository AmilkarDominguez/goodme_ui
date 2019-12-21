import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSRoutinesPageRoutingModule } from './tab-s-routines-routing.module';

import { TabSRoutinesPage } from './tab-s-routines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSRoutinesPageRoutingModule
  ],
  declarations: [TabSRoutinesPage]
})
export class TabSRoutinesPageModule {}
