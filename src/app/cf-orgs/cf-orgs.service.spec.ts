import { TestBed } from '@angular/core/testing';

import { CfOrgsService } from './cf-orgs.service';

describe('CfOrgsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CfOrgsService = TestBed.get(CfOrgsService);
    expect(service).toBeTruthy();
  });
});
