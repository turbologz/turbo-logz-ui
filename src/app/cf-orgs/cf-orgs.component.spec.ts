import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfOrgsComponent } from './cf-orgs.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './cf-orgs.actions';

jest.mock('@ngrx/store');

describe('CfOrgsComponent', () => {
  let component: CfOrgsComponent;
  let fixture: ComponentFixture<CfOrgsComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CfOrgsComponent],
      providers: [
        {
          provide: Store,
          useValue: new Store(null, null, null)
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfOrgsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should have a list of organizations', () => {
    expect(element.querySelector('app-cf-orgs-list')).not.toBeNull();
  });

  describe('actions', () => {

    it('should dispatch an action to get organizations', () => {
      expect(Store.prototype.dispatch).toHaveBeenCalledWith(new actions.FetchOrgs());
    });
  });
});
