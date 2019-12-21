import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCHomePageRoutingModule } from './tab-c-home-routing.module';

import { TabCHomePage } from './tab-c-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCHomePageRoutingModule
  ],
  declarations: [TabCHomePage]
})
export class TabCHomePageModule {}
