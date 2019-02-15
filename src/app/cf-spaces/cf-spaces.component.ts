import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ModuleState} from "./module.state";
import * as actions from './cf-spaces.actions';

@Component({
  selector: 'app-cf-spaces',
  templateUrl: './cf-spaces.component.html',
  styleUrls: ['./cf-spaces.component.scss']
})
export class CfSpacesComponent implements OnInit {

  constructor(private store: Store<ModuleState>) {
  }

  ngOnInit() {
    this.store.dispatch(new actions.FetchSpaces());
  }

}
