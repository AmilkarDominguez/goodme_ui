import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignRoutinesPage } from './assign-routines.page';

const routes: Routes = [
  {
    path: '',
    component: AssignRoutinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignRoutinesPageRoutingModule {}
