import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfLogsComponent } from './cf-logs.component';

describe('CfLogsComponent', () => {
  let component: CfLogsComponent;
  let fixture: ComponentFixture<CfLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
