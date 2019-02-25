import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfOrgsComponent } from './cf-orgs.component';
import { CfOrgsListComponent } from './cf-orgs-list/cf-orgs-list.component';

@NgModule({
  declarations: [CfOrgsComponent, CfOrgsListComponent],
  imports: [
    CommonModule
  ]
})
export class CfOrgsModule { }
