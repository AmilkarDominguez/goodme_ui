import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormExercisePageRoutingModule } from './form-exercise-routing.module';

import { FormExercisePage } from './form-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormExercisePageRoutingModule
  ],
  declarations: [FormExercisePage]
})
export class FormExercisePageModule {}
