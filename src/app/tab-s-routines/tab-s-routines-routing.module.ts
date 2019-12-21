import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSRoutinesPage } from './tab-s-routines.page';

const routes: Routes = [
  {
    path: '',
    component: TabSRoutinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSRoutinesPageRoutingModule {}
