import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCProfilePage } from './tab-c-profile.page';

const routes: Routes = [
  {
    path: '',
    component: TabCProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCProfilePageRoutingModule {}
