import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsCPageRoutingModule } from './tabs-c-routing.module';

import { TabsCPage } from './tabs-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsCPageRoutingModule
  ],
  declarations: [TabsCPage]
})
export class TabsCPageModule {}
