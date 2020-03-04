import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSCoachRoutinesPage } from './tab-s-coach-routines.page';

const routes: Routes = [
  {
    path: '',
    component: TabSCoachRoutinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSCoachRoutinesPageRoutingModule {}
