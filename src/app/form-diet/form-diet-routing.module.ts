import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormDietPage } from './form-diet.page';

const routes: Routes = [
  {
    path: '',
    component: FormDietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormDietPageRoutingModule {}
