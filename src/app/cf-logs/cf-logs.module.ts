import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfLogsComponent } from './cf-logs.component';
import { CfLogsViewerComponent } from './cf-logs-viewer/cf-logs-viewer.component';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material';

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

    // Material
    MatListModule
  ]
})
export class CfLogsModule {
}
