import { Routes } from '@angular/router';
import { IsLoggedInGuard } from './core/is-logged-in.guard';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './landing/landing.module#LandingModule'
  },
  {
    path: 'orgs',
    loadChildren: './cf-orgs/cf-orgs.module#CfOrgsModule',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'orgs/:orgId',
    loadChildren: './cf-spaces/cf-spaces.module#CfSpacesModule',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'orgs/:orgId/:spaceId',
    loadChildren: './cf-apps/cf-apps.module#CfAppsModule',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'orgs/:orgId/:spaceId/:appId',
    loadChildren: './cf-logs/cf-logs.module#CfLogsModule',
    canActivate: [IsLoggedInGuard]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
