import {Action} from '@ngrx/store';
import {CfApp} from './cf-app.model';

export const FETCH_APPS = 'cf-apps/FETCH_APPS';
export const FETCH_APPS_OK = 'cf-apps/FETCH_APPS_OK';
export const FETCH_APPS_FAIL = 'cf-apps/FETCH_APPS_FAIL';

export class FetchApps implements Action {
  readonly type = FETCH_APPS;

  constructor(public spaceId: string) {
  }
}

export class FetchAppsOk implements Action {
  readonly type = FETCH_APPS_OK;

  constructor(public cfApps: CfApp[]) {
  }
}

export class FetchAppsFail implements Action {
  readonly type = FETCH_APPS_FAIL;
}

export type CfAppsActions = | FetchApps | FetchAppsOk | FetchAppsFail;
