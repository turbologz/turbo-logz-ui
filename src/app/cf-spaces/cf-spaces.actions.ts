import { Action } from '@ngrx/store';
import { CfSpace } from './cf-spaces.state';

export const FETCH_SPACES = 'cf-spaces/FETCH_SPACES';
export const FETCH_SPACES_OK = 'cf-spaces/FETCH_SPACES_OK';
export const FETCH_SPACES_FAIL = 'cf-spaces/FETCH_SPACES_FAIL';

export class FetchSpaces implements Action {
  readonly type = FETCH_SPACES;
}

export class FetchSpacesOk implements Action {
  readonly type = FETCH_SPACES_OK;

  constructor(public spaces: CfSpace[]) {
  }
}

export class FetchSpacesFail implements Action {
  readonly type = FETCH_SPACES_FAIL;
}

export type CfSpacesActions =
  | FetchSpaces
  | FetchSpacesOk
  | FetchSpacesFail;
