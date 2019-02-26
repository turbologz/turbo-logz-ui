import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfLogsComponent } from './cf-logs.component';
import { CfLogsViewerComponent } from './cf-logs-viewer/cf-logs-viewer.component';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducer } from './cf-logs.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CfLogsEffects } from './cf-logs.effects';

const routes: Routes = [
  {
    path: '',
    component: CfLogsComponent,
  }
];

@NgModule({
  declarations: [CfLogsComponent, CfLogsViewerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('cfLogs', reducer),
    EffectsModule.forFeature([CfLogsEffects]),

    // Material
    MatListModule
  ]
})
export class CfLogsModule {
}
