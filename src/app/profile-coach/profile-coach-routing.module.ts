import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCoachPage } from './profile-coach.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileCoachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileCoachPageRoutingModule {}
