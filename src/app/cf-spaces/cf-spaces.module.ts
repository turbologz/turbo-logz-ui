import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CfSpacesComponent} from './cf-spaces.component';
import {CfSpacesListComponent} from './cf-spaces-list/cf-spaces-list.component';
import {MatListModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {reducer} from './cf-spaces.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CfSpacesEffects} from './cf-spaces.effects';

const routes: Routes = [
  {
    path: '',
    component: CfSpacesComponent,
  },
];

@NgModule({
  declarations: [CfSpacesComponent, CfSpacesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('cfSpaces', reducer),
    EffectsModule.forFeature([CfSpacesEffects]),

    // Material
    MatListModule
  ]
})
export class CfSpacesModule {
}
