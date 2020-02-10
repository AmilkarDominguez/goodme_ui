import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignDietsPage } from './assign-diets.page';

const routes: Routes = [
  {
    path: '',
    component: AssignDietsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignDietsPageRoutingModule {}
