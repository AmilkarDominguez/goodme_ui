import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachSubscribersPage } from './coach-subscribers.page';

const routes: Routes = [
  {
    path: '',
    component: CoachSubscribersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachSubscribersPageRoutingModule {}
