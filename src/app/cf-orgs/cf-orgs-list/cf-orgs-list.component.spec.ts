import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfOrgsListComponent } from './cf-orgs-list.component';

describe('CfOrgsListComponent', () => {
  let component: CfOrgsListComponent;
  let fixture: ComponentFixture<CfOrgsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfOrgsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfOrgsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
