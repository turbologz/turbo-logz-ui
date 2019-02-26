import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { CfLogsViewerComponent } from './cf-logs-viewer.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import * as actions from '../cf-logs.actions';
import {Terminal} from 'xterm';

jest.mock('xterm');
jest.mock('@ngrx/store');

describe('CfLogsViewerComponent', () => {
  let component: CfLogsViewerComponent;
  let fixture: ComponentFixture<CfLogsViewerComponent>;
  let element;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CfLogsViewerComponent],
      providers: [
        {
          provide: Store,
          useValue: new Store(null, null, null)
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({appId: 'app1'})
          }
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfLogsViewerComponent);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should dispatch an action to subscribe to logs for an app', () => {
    expect(Store.prototype.dispatch).toHaveBeenCalled();
  });
});
