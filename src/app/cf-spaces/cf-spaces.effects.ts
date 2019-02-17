import {Injectable} from '@angular/core';
import {catchError, mergeMap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import * as actions from './cf-spaces.actions';
import {CfSpacesService} from './cf-spaces.service';

@Injectable()
export class CfSpacesEffects {

  @Effect() login$ = this.actions$.pipe(
    ofType(actions.FETCH_SPACES),
    mergeMap(() =>
      this.service.getSpaces().pipe(
        mergeMap((response) => of(new actions.FetchSpacesOk(response.data.cfSpaces))),
        catchError(() => of(new actions.FetchSpacesFail()))
      )
    )
  );

  constructor(private actions$: Actions,
              private service: CfSpacesService) {
  }

}
