import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPayPage } from './form-pay.page';

const routes: Routes = [
  {
    path: '',
    component: FormPayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPayPageRoutingModule {}
