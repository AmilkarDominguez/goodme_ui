import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRequirementPage } from './form-requirement.page';

const routes: Routes = [
  {
    path: '',
    component: FormRequirementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRequirementPageRoutingModule {}
