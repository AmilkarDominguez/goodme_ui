import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSProfilePage } from './tab-s-profile.page';

const routes: Routes = [
  {
    path: '',
    component: TabSProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSProfilePageRoutingModule {}
