import { cfSpacesState, CfSpacesState } from './cf-spaces.state';
import { CfSpacesActions } from './cf-spaces.actions';
import * as actions from './cf-spaces.actions';

export function reducer(state: CfSpacesState = cfSpacesState, action: CfSpacesActions): CfSpacesState {
  switch (action.type) {
    case actions.FETCH_SPACES:
      return {...state, isLoadingSpaces: true};
    case actions.FETCH_SPACES_OK:
      return {...state, isLoadingSpaces: false, spaces: action.spaces};
    case actions.FETCH_SPACES_FAIL:
      return {...state, isLoadingSpaces: false};
    default:
      return state;
  }
}
