import {CfAppsState, cfAppState} from "./cf-apps.state";
import * as actions from './cf-apps.actions';
import {reducer} from "./cf-apps.reducer";
import {CfApp} from "./cf-app.model";

describe('CfApps Reducer', () => {

  it('should return same state if action is not recognized', () => {
    const state: CfAppsState = {...cfAppState};
    const action = {type: 'UNKNOWN'} as any;

    expect(reducer(state, action)).toEqual(state);
  });

  it('should fetch apps', () => {
    const state: CfAppsState = {...cfAppState, isFetchingApps: false};
    const action = new actions.FetchApps('space1');

    expect(reducer(state, action)).toEqual({...state, isFetchingApps: true});
  });

  it('should populate apps when fetching apps is successful', () => {
    const state: CfAppsState = {...cfAppState, isFetchingApps: true, cfApps: [{}] as CfApp[]};
    const action = new actions.FetchAppsOk([{}, {}, {}] as CfApp[]);

    expect(reducer(state, action)).toEqual({...state, isFetchingApps: false, cfApps: [{}, {}, {}]});
  });

  it('should alert the user if fetching apps has failed', () => {
    const state: CfAppsState = {...cfAppState, isFetchingApps: true};
    const action = new actions.FetchAppsFail();

    expect(reducer(state, action)).toEqual({...state, isFetchingApps: false});
  });
});
