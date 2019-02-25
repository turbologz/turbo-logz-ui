import { async } from '@angular/core/testing';

import { CfSpacesService } from './cf-spaces.service';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { CfSpace } from './cf-spaces.state';

describe('CfSpacesService', () => {

  const SPACES: CfSpace[] = [
    {id: 'space1', name: 'name1'},
    {id: 'space2', name: 'name2'},
    {id: 'space3', name: 'name3'}
  ];

  let service: CfSpacesService;

  beforeEach(() => {
    Apollo.prototype.query = jest.fn().mockImplementationOnce(() => of(SPACES));

    service = new CfSpacesService(new Apollo(null, null));
  });

  it('should get a list of spaces in an organization', async(() => {
    service.getSpaces('abc123').subscribe((spaces) => {
      expect(spaces).toEqual(SPACES);
    });
  }));
});
