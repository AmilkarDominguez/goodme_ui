import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileCoachPageRoutingModule } from './profile-coach-routing.module';

import { ProfileCoachPage } from './profile-coach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileCoachPageRoutingModule
  ],
  declarations: [ProfileCoachPage]
})
export class ProfileCoachPageModule {}
