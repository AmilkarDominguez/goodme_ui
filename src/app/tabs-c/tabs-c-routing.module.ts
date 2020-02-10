import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsCPage } from './tabs-c.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab-c/home',
  },
  {
    path: '',
    component: TabsCPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../tab-c-home/tab-c-home.module#TabCHomePageModule'
          }
        ]
      },
      {
        path: 'routines',
        children: [
          {
            path: '',
            loadChildren: '../tab-c-routines/tab-c-routines.module#TabCRoutinesPageModule'
          }
        ]
      },
      {
        path: 'diets',
        children: [
          {
            path: '',
            loadChildren: '../tab-c-diets/tab-c-diets.module#TabCDietsPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../tab-c-profile/tab-c-profile.module#TabCProfilePageModule'
          }
        ]
      }
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsCPageRoutingModule { }
