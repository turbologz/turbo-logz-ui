import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfOrgsListComponent } from './cf-orgs-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CfOrgsListComponent', () => {
  let component: CfOrgsListComponent;
  let fixture: ComponentFixture<CfOrgsListComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CfOrgsListComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfOrgsListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    component.orgs = [
      {id: 'abc1', name: 'org1'},
      {id: 'abc2', name: 'org2'},
      {id: 'abc3', name: 'org3'},
    ];

    fixture.detectChanges();
  });

  it('should have a list of organizations', () => {
    expect(element.querySelector('mat-list')).not.toBeNull();
  });

  it('should have correct amount of organizations in the list', () => {
    expect(element.querySelectorAll('mat-list mat-list-item').length).toBe(3);
  });

  it('should have correct organization names in list', () => {
    const orgs = element.querySelectorAll('mat-list-item');

    expect(orgs[0].textContent).toContain('org1');
    expect(orgs[1].textContent).toContain('org2');
    expect(orgs[2].textContent).toContain('org3');
  });
});
