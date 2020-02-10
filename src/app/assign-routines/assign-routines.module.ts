import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignRoutinesPageRoutingModule } from './assign-routines-routing.module';

import { AssignRoutinesPage } from './assign-routines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignRoutinesPageRoutingModule
  ],
  declarations: [AssignRoutinesPage]
})
export class AssignRoutinesPageModule {}
