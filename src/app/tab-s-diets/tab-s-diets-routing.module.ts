import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSDietsPage } from './tab-s-diets.page';

const routes: Routes = [
  {
    path: '',
    component: TabSDietsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSDietsPageRoutingModule {}
