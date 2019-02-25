import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfSpacesComponent } from './cf-spaces.component';
import { Store } from '@ngrx/store';
import * as actions from './cf-spaces.actions';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

jest.mock('@ngrx/store');

describe('CfSpacesComponent', () => {
  let component: CfSpacesComponent;
  let fixture: ComponentFixture<CfSpacesComponent>;
  let store;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CfSpacesComponent],
      providers: [
        {provide: Store, useValue: new Store(null, null, null)},
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({orgId: 'abc123'})
          }
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfSpacesComponent);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should have a list of spaces', () => {
    expect(element.querySelector('app-cf-spaces-list')).not.toBeNull();
  });

  describe('actions', () => {

    it('should dispatch an action to fetch a list of spaces', () => {
      expect(Store.prototype.dispatch).toHaveBeenCalledWith(new actions.FetchSpaces('abc123'));
    });
  });
});
