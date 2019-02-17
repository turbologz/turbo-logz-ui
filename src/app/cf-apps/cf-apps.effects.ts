import {Injectable} from '@angular/core';
import {catchError, mergeMap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as actions from './cf-apps.actions';
import {CfAppsService} from './cf-apps.service';
import {of} from 'rxjs';

@Injectable()
export class CfAppsEffects {

  @Effect() login$ = this.actions$.pipe(
    ofType<actions.FetchApps>(actions.FETCH_APPS),
    mergeMap(({spaceId}) =>
      this.service.getApps(spaceId).pipe(
        mergeMap((response) => of(new actions.FetchAppsOk(response.data.cfApps))),
        catchError(() => of(new actions.FetchAppsFail()))
      )
    )
  );

  constructor(private actions$: Actions,
              private service: CfAppsService) {
  }

}
