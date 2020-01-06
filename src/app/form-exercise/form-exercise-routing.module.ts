import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormExercisePage } from './form-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: FormExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormExercisePageRoutingModule {}
