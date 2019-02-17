import {of} from "rxjs/internal/observable/of";
import {cold} from "jest-marbles";
import {Actions} from "@ngrx/effects";
import {throwError} from "rxjs";
import {CfApp} from "./cf-app.model";
import * as actions from './cf-apps.actions';
import {CfAppsService} from "./cf-apps.service";
import {CfAppsEffects} from "./cf-apps.effects";

describe('CfApps Effects', () => {

  const APPS: CfApp[] = [
    {id: 'app1', spaceId: 'space1', appId: 'app-id1', name: 'name1'},
    {id: 'app2', spaceId: 'space1', appId: 'app-id2', name: 'name2'},
    {id: 'app3', spaceId: 'space1', appId: 'app-id3', name: 'name3'}
  ];

  describe('get apps', () => {

    it('should work', () => {
      CfAppsService.prototype.getApps = jest.fn().mockImplementationOnce(() => of({data: {cfApps: APPS}}));

      const source = cold('a', {a: new actions.FetchApps('space1')});

      const expected = cold('a', {a: new actions.FetchAppsOk(APPS)});

      const effects = new CfAppsEffects(new Actions(source), new CfAppsService(null));

      expect(effects.login$).toBeObservable(expected);
    });

    it('should handle login failure', () => {
      CfAppsService.prototype.getApps = jest.fn().mockImplementationOnce(() => throwError('Error'));
      const source = cold('a', {a: new actions.FetchApps('space1')});

      const expected = cold('a', {a: new actions.FetchAppsFail()});

      const effects = new CfAppsEffects(new Actions(source), new CfAppsService(null));

      expect(effects.login$).toBeObservable(expected);
    });
  });

});
