import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCDietsPage } from './tab-c-diets.page';

const routes: Routes = [
  {
    path: '',
    component: TabCDietsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCDietsPageRoutingModule {}
