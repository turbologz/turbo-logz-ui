import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CfAppsListComponent} from './cf-apps-list.component';
import {CfApp} from "../cf-app.model";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('CfAppsListComponent', () => {

  const APPS: CfApp[] = [
    {id: 'app1', spaceId: 'space1', appId: 'app-id1', name: 'name1'},
    {id: 'app2', spaceId: 'space1', appId: 'app-id2', name: 'name2'},
    {id: 'app3', spaceId: 'space1', appId: 'app-id3', name: 'name3'}
  ];

  let component: CfAppsListComponent;
  let fixture: ComponentFixture<CfAppsListComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CfAppsListComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfAppsListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    component.cfApps = APPS;

    fixture.detectChanges();
  });

  it('should have a list', () => {
    expect(element.querySelector('mat-list')).not.toBeNull();
  });

  it('should have the correct amount of apps in the list', () => {
    expect(element.querySelectorAll('mat-list mat-list-item').length).toBe(3);
  });

  it('should have correct name of each app', () => {
    const apps = (element.querySelectorAll('mat-list mat-list-item'));

    expect(apps[0].textContent).toBe('name1');
    expect(apps[1].textContent).toBe('name2');
    expect(apps[2].textContent).toBe('name3');
  });
});
