import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachSubscribersPageRoutingModule } from './coach-subscribers-routing.module';

import { CoachSubscribersPage } from './coach-subscribers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachSubscribersPageRoutingModule
  ],
  declarations: [CoachSubscribersPage]
})
export class CoachSubscribersPageModule {}
