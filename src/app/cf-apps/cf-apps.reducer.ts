import {CfAppsState, cfAppState} from './cf-apps.state';
import {CfAppsActions} from './cf-apps.actions';
import * as actions from './cf-apps.actions';

export function reducer(state: CfAppsState = cfAppState, action: CfAppsActions): CfAppsState {
  switch (action.type) {
    case actions.FETCH_APPS:
      return {...state, isFetchingApps: true};
    case actions.FETCH_APPS_OK:
      return {...state, isFetchingApps: false, cfApps: action.cfApps};
    case actions.FETCH_APPS_FAIL:
      return {...state, isFetchingApps: false};
    default:
      return state;
  }
}
