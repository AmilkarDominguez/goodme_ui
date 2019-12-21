import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCRoutinesPageRoutingModule } from './tab-c-routines-routing.module';

import { TabCRoutinesPage } from './tab-c-routines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCRoutinesPageRoutingModule
  ],
  declarations: [TabCRoutinesPage]
})
export class TabCRoutinesPageModule {}
