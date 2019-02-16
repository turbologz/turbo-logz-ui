import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ModuleState} from './module.state';
import * as actions from './cf-spaces.actions';
import {Observable} from 'rxjs';
import {CfSpace} from './cf-spaces.state';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cf-spaces',
  templateUrl: './cf-spaces.component.html',
  styleUrls: ['./cf-spaces.component.scss']
})
export class CfSpacesComponent implements OnInit {

  spaces$: Observable<CfSpace[]>;

  constructor(private store: Store<ModuleState>) {
    this.spaces$ = store.pipe(map((state) => state.cfSpaces.spaces));
  }

  ngOnInit() {
    this.store.dispatch(new actions.FetchSpaces());
  }

}
