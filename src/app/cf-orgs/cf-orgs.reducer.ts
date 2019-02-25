import { cfOrgsState, CfOrgsState } from './cf-orgs.state';
import { CfOrgsActions } from './cf-orgs.actions';
import * as actions from './cf-orgs.actions';

export function reducer(state: CfOrgsState = cfOrgsState, action: CfOrgsActions): CfOrgsState {
  switch (action.type) {
    case actions.FETCH_ORGS:
      return {...state, isFetchingOrgs: true};
    case actions.FETCH_ORGS_OK:
      return {...state, isFetchingOrgs: false, orgs: action.orgs};
    case actions.FETCH_ORGS_FAIL:
      return {...state, isFetchingOrgs: false};
    default:
      return state;
  }
}
