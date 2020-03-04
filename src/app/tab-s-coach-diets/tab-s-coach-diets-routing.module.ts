import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSCoachDietsPage } from './tab-s-coach-diets.page';

const routes: Routes = [
  {
    path: '',
    component: TabSCoachDietsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSCoachDietsPageRoutingModule {}
