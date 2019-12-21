import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSProfilePageRoutingModule } from './tab-s-profile-routing.module';

import { TabSProfilePage } from './tab-s-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSProfilePageRoutingModule
  ],
  declarations: [TabSProfilePage]
})
export class TabSProfilePageModule {}
