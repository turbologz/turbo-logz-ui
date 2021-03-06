import { Injectable } from '@angular/core';
import { ModuleState } from './module.state';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CfLogsService } from './cf-logs.service';
import * as actions from './cf-logs.actions';
import { catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';

@Injectable()
export class CfLogsEffects {

  @Effect() subscribeToLogs$ = this.actions$.pipe(
    ofType<actions.SubscribeToLogs>(actions.SUBSCRIBE_TO_LOGS),
    mergeMap(({appId, logFunction}) =>
      this.editorService.subscribeToLogs(appId).pipe(
        mergeMap((log) => {
          logFunction(log.data.tailLog);

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
