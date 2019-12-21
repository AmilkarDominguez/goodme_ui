import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSHomePageRoutingModule } from './tab-s-home-routing.module';

import { TabSHomePage } from './tab-s-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSHomePageRoutingModule
  ],
  declarations: [TabSHomePage]
})
export class TabSHomePageModule {}
