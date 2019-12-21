import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsSPageRoutingModule } from './tabs-s-routing.module';

import { TabsSPage } from './tabs-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsSPageRoutingModule
  ],
  declarations: [TabsSPage]
})
export class TabsSPageModule {}
