import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSCoachRoutinesPageRoutingModule } from './tab-s-coach-routines-routing.module';

import { TabSCoachRoutinesPage } from './tab-s-coach-routines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSCoachRoutinesPageRoutingModule
  ],
  declarations: [TabSCoachRoutinesPage]
})
export class TabSCoachRoutinesPageModule {}
