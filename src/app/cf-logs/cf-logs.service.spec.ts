import { CfLogsService } from './cf-logs.service';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs/internal/observable/of';

jest.mock('apollo-angular');

describe('CfLogsService', () => {

  const log = {
    host: 'thor.prod.prod-blog-backend',
    ident: 'abc123',
    message: '\u001b[34mℹ\u001b[39m \u001b[90m｢wdm｣\u001b[39m: Compiled successfully.\n',
    time: 1234,
    pid: '[RTR/11]',
    tag: 'cf.app.user.info'
  };

  let service: CfLogsService;

  it('should listen for directory changes', (done) => {
    Apollo.prototype.subscribe = jest.fn().mockImplementationOnce(() => of(log));

    service = new CfLogsService(new Apollo(null, null));

    service.subscribeToLogs('test123').subscribe((dir) => {
      expect(dir).toEqual(log);
      done();
    });
  });

});
