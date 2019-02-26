import { CfLogsService } from './cf-logs.service';
import { of } from 'rxjs/internal/observable/of';
import * as actions from './cf-logs.actions';
import { cold } from 'jest-marbles';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ModuleState } from './module.state';
import { CfLogsEffects } from './cf-logs.effects';
import { throwError } from 'rxjs';

describe('Cf Logs Effects', () => {

  const log = {
    host: 'thor.prod.prod-blog-backend',
    ident: 'abc123',
    message: '\u001b[34mℹ\u001b[39m \u001b[90m｢wdm｣\u001b[39m: Compiled successfully.\n',
    time: 1234,
    pid: '[RTR/11]',
    tag: 'cf.app.user.info'
  };

  const store: Store<ModuleState>;

  describe('subscribe to selected file changes', () => {

    it('should work', () => {
      CfLogsService.prototype.subscribeToLogs = jest.fn().mockImplementationOnce(() => of({data: {log}}));

      const source = cold('a', {
        a: new actions.SubscribeToLogs('abc123', () => {
        })
      });

      const expected = cold('a', {a: new actions.SubscribeToLogsOk()});

      const effects = new CfLogsEffects(new Actions(source), store, new CfLogsService(null));

      expect(effects.subscribeToLogs$).toBeObservable(expected);
    });

    it('should handle failures', () => {
      CfLogsService.prototype.subscribeToLogs = jest.fn().mockImplementationOnce(() => throwError('ERROR!!'));

      const source = cold('a', {
        a: new actions.SubscribeToLogs('abc123', () => {
        })
      });

      const expected = cold('a', {a: new actions.SubscribeToLogsFail()});

      const effects = new CfLogsEffects(new Actions(source), store, new CfLogsService(null));

      expect(effects.subscribeToLogs$).toBeObservable(expected);
    });
  });

});
