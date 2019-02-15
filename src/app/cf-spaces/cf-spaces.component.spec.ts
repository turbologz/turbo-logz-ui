import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CfSpacesComponent} from './cf-spaces.component';
import {Store} from "@ngrx/store";
import * as actions from './cf-spaces.actions';

jest.mock('@ngrx/store');

describe('CfSpacesComponent', () => {
  let component: CfSpacesComponent;
  let fixture: ComponentFixture<CfSpacesComponent>;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CfSpacesComponent],
      providers: [
        {provide: Store, useValue: new Store(null, null, null)}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfSpacesComponent);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('actions', () => {

    it('should dispatch an action to fetch a list of spaces', () => {
      expect(Store.prototype.dispatch).toHaveBeenCalledWith(new actions.FetchSpaces());
    });
  });
});
