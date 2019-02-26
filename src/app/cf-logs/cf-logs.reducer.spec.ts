import { reducer } from './cf-logs.reducer';
import { cfLogsState, CfLogsState } from './cf-logs.state';
import * as actions from './cf-logs.actions';

describe('CF Logs Reducer', () => {

  it('should return same state if action is not recognized', () => {
    const state: CfLogsState = {...cfLogsState};
    const action = {type: 'UNKNOWN'} as any;

    expect(reducer(state, action)).toEqual(state);
  });

  it('should subscribe to logs from an app', () => {
    const state: CfLogsState = {...cfLogsState, isSubscribingToLogs: false};
    const action = new actions.SubscribeToLogs('abc123', () => {
    });

    expect(reducer(state, action)).toEqual({...state, isSubscribingToLogs: true});
  });

  it('should handle successful subscription to logs of an app', () => {
    const state: CfLogsState = {...cfLogsState, isSubscribingToLogs: true};
    const action = new actions.SubscribeToLogsOk();

    expect(reducer(state, action)).toEqual({...state, isSubscribingToLogs: false});
  });

  it('should handle failed subscription to logs of an app', () => {
    const state: CfLogsState = {...cfLogsState, isSubscribingToLogs: true};
    const action = new actions.SubscribeToLogsFail();

    expect(reducer(state, action)).toEqual({...state, isSubscribingToLogs: false});
  });
});
