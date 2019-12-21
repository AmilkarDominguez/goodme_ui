import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSHomePage } from './tab-s-home.page';

const routes: Routes = [
  {
    path: '',
    component: TabSHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSHomePageRoutingModule {}
