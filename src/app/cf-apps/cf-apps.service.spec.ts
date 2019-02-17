import {async} from '@angular/core/testing';

import {CfAppsService} from './cf-apps.service';
import {CfApp} from "./cf-app.model";
import {Apollo} from "apollo-angular";
import {of} from "rxjs";

describe('CfAppsService', () => {

  const APPS: CfApp[] = [
    {id: 'app1', spaceId: 'space1', appId: 'app-id1', name: 'name1'},
    {id: 'app2', spaceId: 'space1', appId: 'app-id2', name: 'name2'},
    {id: 'app3', spaceId: 'space1', appId: 'app-id3', name: 'name3'}
  ];

  let service: CfAppsService;

  beforeEach(() => {
    Apollo.prototype.query = jest.fn().mockImplementationOnce(() => of(APPS));

    service = new CfAppsService(new Apollo(null, null));
  });

  it('should get a list of apps', async(() => {
    service.getApps('space1').subscribe((spaces) => {
      expect(spaces).toEqual(APPS);
      expect(Apollo.prototype.query).toHaveBeenCalledWith({query: expect.any(Object), variables: {spaceId: 'space1'}});
    });
  }));
});
