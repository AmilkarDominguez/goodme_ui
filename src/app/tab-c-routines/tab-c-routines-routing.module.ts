import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCRoutinesPage } from './tab-c-routines.page';

const routes: Routes = [
  {
    path: '',
    component: TabCRoutinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCRoutinesPageRoutingModule {}
