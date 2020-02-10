import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignDietsPageRoutingModule } from './assign-diets-routing.module';

import { AssignDietsPage } from './assign-diets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignDietsPageRoutingModule
  ],
  declarations: [AssignDietsPage]
})
export class AssignDietsPageModule {}
