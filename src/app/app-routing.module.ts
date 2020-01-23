import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs-c', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'tabs-c',
    loadChildren: () => import('./tabs-c/tabs-c.module').then( m => m.TabsCPageModule)
  },
  {
    path: 'tab-c-profile',
    loadChildren: () => import('./tab-c-profile/tab-c-profile.module').then( m => m.TabCProfilePageModule)
  },
  {
    path: 'tab-c-diets',
    loadChildren: () => import('./tab-c-diets/tab-c-diets.module').then( m => m.TabCDietsPageModule)
  },
  {
    path: 'tab-c-routines',
    loadChildren: () => import('./tab-c-routines/tab-c-routines.module').then( m => m.TabCRoutinesPageModule)
  },
  {
    path: 'tab-c-home',
    loadChildren: () => import('./tab-c-home/tab-c-home.module').then( m => m.TabCHomePageModule)
  },
  {
    path: 'tabs-s',
    loadChildren: () => import('./tabs-s/tabs-s.module').then( m => m.TabsSPageModule)
  },
  {
    path: 'tab-s-home',
    loadChildren: () => import('./tab-s-home/tab-s-home.module').then( m => m.TabSHomePageModule)
  },
  {
    path: 'tab-s-routines',
    loadChildren: () => import('./tab-s-routines/tab-s-routines.module').then( m => m.TabSRoutinesPageModule)
  },
  {
    path: 'tab-s-diets',
    loadChildren: () => import('./tab-s-diets/tab-s-diets.module').then( m => m.TabSDietsPageModule)
  },
  {
    path: 'tab-s-profile',
    loadChildren: () => import('./tab-s-profile/tab-s-profile.module').then( m => m.TabSProfilePageModule)
  },
  {
    path: 'form-diet',
    loadChildren: () => import('./form-diet/form-diet.module').then( m => m.FormDietPageModule)
  },
  {
    path: 'form-food',
    loadChildren: () => import('./form-food/form-food.module').then( m => m.FormFoodPageModule)
  },
  {
    path: 'form-routine',
    loadChildren: () => import('./form-routine/form-routine.module').then( m => m.FormRoutinePageModule)
  },
  {
    path: 'form-exercise',
    loadChildren: () => import('./form-exercise/form-exercise.module').then( m => m.FormExercisePageModule)
  },
  {
    path: 'form-requirement',
    loadChildren: () => import('./form-requirement/form-requirement.module').then( m => m.FormRequirementPageModule)
  },
  {
    path: 'profile-coach',
    loadChildren: () => import('./profile-coach/profile-coach.module').then( m => m.ProfileCoachPageModule)
  },
  {
    path: 'form-pay',
    loadChildren: () => import('./form-pay/form-pay.module').then( m => m.FormPayPageModule)
  },
  {
    path: 'coach-subscribers',
    loadChildren: () => import('./coach-subscribers/coach-subscribers.module').then( m => m.CoachSubscribersPageModule)
  },
  {
    path: 'subscriber',
    loadChildren: () => import('./subscriber/subscriber.module').then( m => m.SubscriberPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
