import {CfSpacesService} from "./cf-spaces.service";
import {of} from "rxjs/internal/observable/of";
import {CfSpace} from "./cf-spaces.state";
import {cold} from "jest-marbles";
import * as actions from './cf-spaces.actions';
import {Actions} from "@ngrx/effects";
import {CfSpacesEffects} from "./cf-spaces.effects";
import {throwError} from "rxjs";

describe('CfSpaces Effects', () => {

  const SPACES: CfSpace[] = [
    {id: 'space1', name: 'name1'},
    {id: 'space2', name: 'name2'},
    {id: 'space3', name: 'name3'}
  ];

  describe('get spaces', () => {

    it('should work', () => {
      CfSpacesService.prototype.getSpaces = jest.fn().mockImplementationOnce(() => of({data: {cfSpaces: SPACES}}));

      const source = cold('a', {a: new actions.FetchSpaces()});

      const expected = cold('a', {a: new actions.FetchSpacesOk(SPACES)});

      const effects = new CfSpacesEffects(new Actions(source), new CfSpacesService(null));

      expect(effects.login$).toBeObservable(expected);
    });

    it('should handle login failure', () => {
      CfSpacesService.prototype.getSpaces = jest.fn().mockImplementationOnce(() => throwError('Error'));
      const source = cold('a', {a: new actions.FetchSpaces()});

      const expected = cold('a', {a: new actions.FetchSpacesFail()});

      const effects = new CfSpacesEffects(new Actions(source), new CfSpacesService(null));

      expect(effects.login$).toBeObservable(expected);
    });
  });

});
