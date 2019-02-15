import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CfSpacesComponent } from './cf-spaces.component';
import { CfSpacesListComponent } from './cf-spaces-list/cf-spaces-list.component';

@NgModule({
  declarations: [CfSpacesComponent, CfSpacesListComponent],
  imports: [
    CommonModule
  ]
})
export class CfSpacesModule { }
