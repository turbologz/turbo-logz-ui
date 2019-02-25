import { async } from '@angular/core/testing';

import { CfOrgsService } from './cf-orgs.service';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { CfOrg } from './cf-org.model';

describe('CfOrgsService', () => {

  const SPACES: CfOrg[] = [
    {id: 'org1', name: 'name1'},
    {id: 'org2', name: 'name2'},
    {id: 'org3', name: 'name3'}
  ];

  let service: CfOrgsService;

  beforeEach(() => {
    Apollo.prototype.query = jest.fn().mockImplementationOnce(() => of(SPACES));

    service = new CfOrgsService(new Apollo(null, null));
  });

  it('should get a list of orgs', async(() => {
    service.getOrgs().subscribe((spaces) => {
      expect(spaces).toEqual(SPACES);
    });
  }));
});
