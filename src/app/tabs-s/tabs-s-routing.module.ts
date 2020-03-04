import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsSPage } from './tabs-s.page';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'tabs-s/home'
  // },
  {
    path: '',
    component: TabsSPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../tab-s-home/tab-s-home.module#TabSHomePageModule'
          }
        ]
      },
      {
        path: 'routines-coach',
        children: [
          {
            path: '',
            loadChildren: '../tab-s-coach-routines/tab-s-coach-routines.module#TabSCoachRoutinesPageModule'
            
          }
        ]
      },
      {
        path: 'routines',
        children: [
          {
            path: '',
            loadChildren: '../tab-s-routines/tab-s-routines.module#TabSRoutinesPageModule'
            
          }
        ]
      },
      {
        path: 'diets-coach',
        children: [
          {
            path: '',
            loadChildren: '../tab-s-coach-diets/tab-s-coach-diets.module#TabSCoachDietsPageModule'
            
          }
        ]
      },
      {
        path: 'diets',
        children: [
          {
            path: '',
            loadChildren: '../tab-s-diets/tab-s-diets.module#TabSDietsPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../tab-s-profile/tab-s-profile.module#TabSProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsSPageRoutingModule {}
