import {Routes} from '@angular/router';
import {IsLoggedInGuard} from './core/is-logged-in.guard';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './landing/landing.module#LandingModule'
  },
  {
    path: 'cf-spaces',
    loadChildren: './cf-spaces/cf-spaces.module#CfSpacesModule',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'cf-spaces/:spaceId',
    loadChildren: './cf-apps/cf-apps.module#CfAppsModule',
    canActivate: [IsLoggedInGuard]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
