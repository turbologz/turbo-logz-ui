import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfOrgsComponent } from './cf-orgs.component';
import { CfOrgsListComponent } from './cf-orgs-list/cf-orgs-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './cf-orgs.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CfOrgsEffects } from './cf-orgs.effects';
import { MatListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CfOrgsComponent
  },
];

@NgModule({
  declarations: [CfOrgsComponent, CfOrgsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('cfOrgs', reducer),
    EffectsModule.forFeature([CfOrgsEffects]),

    // Material
    MatListModule
  ]
})
export class CfOrgsModule {
}
