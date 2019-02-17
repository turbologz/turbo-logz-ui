import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ModuleState} from './module.state';
import {ActivatedRoute} from '@angular/router';
import * as actions from './cf-apps.actions';
import {Observable} from 'rxjs';
import {CfApp} from './cf-app.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cf-apps',
  templateUrl: './cf-apps.component.html',
  styleUrls: ['./cf-apps.component.scss']
})
export class CfAppsComponent implements OnInit {

  cfApps$: Observable<CfApp[]>;

  constructor(private store: Store<ModuleState>, private route: ActivatedRoute) {
    this.cfApps$ = this.store.pipe(map((state) => state.cfApps.cfApps));
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.store.dispatch(new actions.FetchApps(params.spaceId));
    });
  }

}
