import { Action } from '@ngrx/store';
import { CfOrg } from './cf-org.model';

export const FETCH_ORGS = 'cf-orgs/FETCH_ORGS';
export const FETCH_ORGS_OK = 'cf-orgs/FETCH_ORGS_OK';
export const FETCH_ORGS_FAIL = 'cf-orgs/FETCH_ORGS_FAIL';

export class FetchOrgs implements Action {
  readonly type = FETCH_ORGS;
}

export class FetchOrgsOk implements Action {
  readonly type = FETCH_ORGS_OK;

  constructor(public orgs: CfOrg[]) {
  }
}

export class FetchOrgsFail implements Action {
  readonly type = FETCH_ORGS_FAIL;
}

export type CfOrgsActions = | FetchOrgs | FetchOrgsOk | FetchOrgsFail;
