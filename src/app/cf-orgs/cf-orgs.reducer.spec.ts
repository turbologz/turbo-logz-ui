import { cfOrgsState, CfOrgsState } from './cf-orgs.state';
import { reducer } from './cf-orgs.reducer';
import * as actions from './cf-orgs.actions';
import { CfOrg } from './cf-org.model';

describe('CF Orgs Reducer', () => {

  it('should return same state if action is not recognized', () => {
    const state: CfOrgsState = {...cfOrgsState};
    const action = {type: 'UNKNOWN'} as any;

    expect(reducer(state, action)).toEqual(state);
  });

  it('should fetch orgs', () => {
    const state: CfOrgsState = {...cfOrgsState, isFetchingOrgs: false};
    const action = new actions.FetchOrgs();

    expect(reducer(state, action)).toEqual({...state, isFetchingOrgs: true});
  });

  it('should handle successful fetch of orgs', () => {
    const state: CfOrgsState = {...cfOrgsState, isFetchingOrgs: true, orgs: []};
    const action = new actions.FetchOrgsOk([{}, {}, {}] as CfOrg[]);

    expect(reducer(state, action)).toEqual({...state, isFetchingOrgs: false, orgs: [{}, {}, {}]});
  });

  it('should handle failure when fetching orgs', () => {
    const state: CfOrgsState = {...cfOrgsState, isFetchingOrgs: true};
    const action = new actions.FetchOrgsFail();

    expect(reducer(state, action)).toEqual({...state, isFetchingOrgs: false});
  });
});
