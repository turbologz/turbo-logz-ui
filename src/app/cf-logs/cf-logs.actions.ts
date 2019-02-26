import { Action } from '@ngrx/store';

export const SUBSCRIBE_TO_LOGS = 'cf-logs/SUBSCRIBE_TO_LOGS';
export const SUBSCRIBE_TO_LOGS_OK = 'cf-logs/SUBSCRIBE_TO_LOGS_OK';
export const SUBSCRIBE_TO_LOGS_FAIL = 'cf-logs/SUBSCRIBE_TO_LOGS_FAIL';

export const UNSUBSCRIBE_FROM_LOGS = 'cf-logs/UNSUBSCRIBE_FROM_LOGS';

export class SubscribeToLogs implements Action {
  readonly type = SUBSCRIBE_TO_LOGS;

  constructor(public appId: string, public logFunction: Function) {
  }
}

export class SubscribeToLogsOk implements Action {
  readonly type = SUBSCRIBE_TO_LOGS_OK;
}

export class SubscribeToLogsFail implements Action {
  readonly type = SUBSCRIBE_TO_LOGS_FAIL;
}

export class UnsubscribeFromLogs implements Action {
  readonly type = UNSUBSCRIBE_FROM_LOGS;

  constructor(public appId: string) {
  }
}

export type CfLogsActions = | SubscribeToLogs | SubscribeToLogsOk | SubscribeToLogsFail | UnsubscribeFromLogs;
