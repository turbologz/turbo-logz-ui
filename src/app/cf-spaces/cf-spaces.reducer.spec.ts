import { CfSpace, CfSpacesState, cfSpacesState } from './cf-spaces.state';
import * as actions from './cf-spaces.actions';
import { reducer } from './cf-spaces.reducer';

describe('CF Spaces Reducer', () => {

  it('should return same state if action is not recognized', () => {
    const state: CfSpacesState = {...cfSpacesState};
    const action = {type: 'UNKNOWN'} as any;

    expect(reducer(state, action)).toEqual(state);
  });

  it('should fetch a list of spaces', () => {
    const state: CfSpacesState = {...cfSpacesState, isLoadingSpaces: false};
    const action = new actions.FetchSpaces();

    expect(reducer(state, action)).toEqual({...state, isLoadingSpaces: true});
  });

  it('should populate list of spaces', () => {
    const state: CfSpacesState = {...cfSpacesState, isLoadingSpaces: true, spaces: [{}] as CfSpace[]};
    const action = new actions.FetchSpacesOk([{}, {}] as CfSpace[]);

    expect(reducer(state, action)).toEqual({...state, isLoadingSpaces: false, spaces: [{}, {}]});
  });

  it('should alert user if fetching spaces failed', () => {
    const state: CfSpacesState = {...cfSpacesState, isLoadingSpaces: true};
    const action = new actions.FetchSpacesFail();

    expect(reducer(state, action)).toEqual({...state, isLoadingSpaces: false});
  });
});
