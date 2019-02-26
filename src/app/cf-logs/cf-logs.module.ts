import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfLogsComponent } from './cf-logs.component';
import { CfLogsViewerComponent } from './cf-logs-viewer/cf-logs-viewer.component';

@NgModule({
  declarations: [CfLogsComponent, CfLogsViewerComponent],
  imports: [
    CommonModule
  ]
})
export class CfLogsModule { }
