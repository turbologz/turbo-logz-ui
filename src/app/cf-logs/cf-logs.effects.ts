import { Injectable } from '@angular/core';
import { ModuleState } from './module.state';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CfLogsService } from './cf-logs.service';
import * as actions from './cf-logs.actions';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class CfLogsEffects {

  @Effect() subscribeToLogs$ = this.actions$.pipe(
    ofType<actions.SubscribeToLogs>(actions.SUBSCRIBE_TO_LOGS),
    mergeMap(({appId, logFunction}) =>
      this.editorService.subscribeToLogs(appId).pipe(
        switchMap((log) => {

          logFunction(log.data.message);

          return of(new actions.SubscribeToLogsOk());
        }),
        catchError(() => of(new actions.SubscribeToLogsFail()))
      )
    )
  );


  constructor(private actions$: Actions,
              private store$: Store<ModuleState>,
              private editorService: CfLogsService) {
  }

}
