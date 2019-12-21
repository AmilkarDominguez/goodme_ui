import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCHomePage } from './tab-c-home.page';

const routes: Routes = [
  {
    path: '',
    component: TabCHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCHomePageRoutingModule {}
