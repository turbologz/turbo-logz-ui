import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModuleState } from './module.state';
import * as actions from './cf-orgs.actions';
import { Observable } from 'rxjs';
import { CfOrg } from './cf-org.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cf-orgs',
  templateUrl: './cf-orgs.component.html',
  styleUrls: ['./cf-orgs.component.scss']
})
export class CfOrgsComponent implements OnInit {

  orgs$: Observable<CfOrg[]>;

  constructor(private store: Store<ModuleState>) {
    this.orgs$ = store.pipe(map(state => state.cfOrgs.orgs));
  }

  ngOnInit() {
    this.store.dispatch(new actions.FetchOrgs());
  }

}
