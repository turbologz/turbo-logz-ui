import { cfLogsState, CfLogsState } from './cf-logs.state';
import { CfLogsActions } from './cf-logs.actions';
import * as actions from './cf-logs.actions';

export function reducer(state: CfLogsState = cfLogsState, action: CfLogsActions): CfLogsState {
  switch (action.type) {
    case actions.SUBSCRIBE_TO_LOGS:
      return {...state, isSubscribingToLogs: true};
    case actions.SUBSCRIBE_TO_LOGS_OK:
      return {...state, isSubscribingToLogs: false};
    case actions.SUBSCRIBE_TO_LOGS_FAIL:
      return {...state, isSubscribingToLogs: false};
    default:
      return state;
  }
}
