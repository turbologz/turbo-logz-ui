import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfAppsComponent } from './cf-apps.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './cf-apps.actions';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

jest.mock('@ngrx/store');

describe('CfAppsComponent', () => {
  let component: CfAppsComponent;
  let fixture: ComponentFixture<CfAppsComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CfAppsComponent],
      providers: [
        {
          provide: Store,
          useValue: new Store(null, null, null)
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({spaceId: 'space1'})
          }
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfAppsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should have a list of apps', () => {
    expect(element.querySelector('app-cf-apps-list')).not.toBeNull();
  });

  describe('actions', () => {

    it('should dispatch an action to fetch apps', () => {
      expect(Store.prototype.dispatch).toHaveBeenCalledWith(new actions.FetchApps('space1'));
    });
  });
});
