import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRoutinePageRoutingModule } from './form-routine-routing.module';

import { FormRoutinePage } from './form-routine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRoutinePageRoutingModule
  ],
  declarations: [FormRoutinePage]
})
export class FormRoutinePageModule {}
