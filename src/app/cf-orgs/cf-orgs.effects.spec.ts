import { of } from 'rxjs/internal/observable/of';
import { cold } from 'jest-marbles';
import * as actions from './cf-orgs.actions';
import { Actions } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { CfOrgsEffects } from './cf-orgs.effects';
import { CfOrgsService } from './cf-orgs.service';
import { CfOrg } from './cf-org.model';

describe('CfOrgs Effects', () => {

  const ORGS: CfOrg[] = [
    {id: 'org1', name: 'name1'},
    {id: 'org2', name: 'name2'},
    {id: 'org3', name: 'name3'}
  ];

  describe('get orgs', () => {

    it('should work', () => {
      CfOrgsService.prototype.getOrgs = jest.fn().mockImplementationOnce(() => of({data: {cfOrgs: ORGS}}));

      const source = cold('a', {a: new actions.FetchOrgs()});

      const expected = cold('a', {a: new actions.FetchOrgsOk(ORGS)});

      const effects = new CfOrgsEffects(new Actions(source), new CfOrgsService(null));

      expect(effects.login$).toBeObservable(expected);
    });

    it('should handle login failure', () => {
      CfOrgsService.prototype.getOrgs = jest.fn().mockImplementationOnce(() => throwError('Error'));
      const source = cold('a', {a: new actions.FetchOrgs()});

      const expected = cold('a', {a: new actions.FetchOrgsFail()});

      const effects = new CfOrgsEffects(new Actions(source), new CfOrgsService(null));

      expect(effects.login$).toBeObservable(expected);
    });
  });

});
