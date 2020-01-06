import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRoutinePage } from './form-routine.page';

const routes: Routes = [
  {
    path: '',
    component: FormRoutinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutinePageRoutingModule {}
