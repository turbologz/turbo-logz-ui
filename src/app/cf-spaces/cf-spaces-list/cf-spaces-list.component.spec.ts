import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CfSpacesListComponent} from './cf-spaces-list.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('CfSpacesListComponent', () => {
  let component: CfSpacesListComponent;
  let fixture: ComponentFixture<CfSpacesListComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CfSpacesListComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfSpacesListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    component.spaces = [
      {id: 'id1', name: 'name1'},
      {id: 'id2', name: 'name2'},
      {id: 'id3', name: 'name3'}
    ];

    fixture.detectChanges();
  });

  it('should have a list', () => {
    expect(element.querySelector('mat-list')).not.toBeNull();
  });

  it('should have correct amount of spaces in the list', () => {
    expect(element.querySelectorAll('mat-list mat-list-item').length).toBe(3);
  });


  it('should have correct name in list items', () => {
    const items = element.querySelectorAll('mat-list-item');

    expect(items[0].textContent).toBe('name1');
    expect(items[1].textContent).toBe('name2');
    expect(items[2].textContent).toBe('name3');
  });
});
