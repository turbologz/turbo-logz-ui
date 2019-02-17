import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CfAppsComponent} from './cf-apps.component';
import {RouterModule, Routes} from '@angular/router';
import {CfAppsListComponent} from './cf-apps-list/cf-apps-list.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from './cf-apps.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CfAppsEffects} from './cf-apps.effects';
import {MatListModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: CfAppsComponent,
  }
];

@NgModule({
  declarations: [CfAppsComponent, CfAppsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('cfApps', reducer),
    EffectsModule.forFeature([CfAppsEffects]),

    // Material
    MatListModule
  ]
})
export class CfAppsModule {
}
