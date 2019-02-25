import { Injectable } from '@angular/core';
import { catchError, mergeMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as actions from './cf-orgs.actions';
import { CfOrgsService } from './cf-orgs.service';

@Injectable()
export class CfOrgsEffects {

  @Effect() login$ = this.actions$.pipe(
    ofType(actions.FETCH_ORGS),
    mergeMap(() =>
      this.service.getOrgs().pipe(
        mergeMap((response) => of(new actions.FetchOrgsOk(response.data.cfOrgs))),
        catchError(() => of(new actions.FetchOrgsFail()))
      )
    )
  );

  constructor(private actions$: Actions,
              private service: CfOrgsService) {
  }

}
