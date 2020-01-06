import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormFoodPage } from './form-food.page';

const routes: Routes = [
  {
    path: '',
    component: FormFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormFoodPageRoutingModule {}
