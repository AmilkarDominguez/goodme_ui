import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCProfilePageRoutingModule } from './tab-c-profile-routing.module';

import { TabCProfilePage } from './tab-c-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCProfilePageRoutingModule
  ],
  declarations: [TabCProfilePage]
})
export class TabCProfilePageModule {}
