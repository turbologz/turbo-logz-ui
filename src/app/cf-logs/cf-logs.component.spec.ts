import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfLogsComponent } from './cf-logs.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CfLogsComponent', () => {
  let component: CfLogsComponent;
  let fixture: ComponentFixture<CfLogsComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CfLogsComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfLogsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should have a log viewer', () => {
    expect(element.querySelector('app-cf-logs-viewer')).not.toBeNull();
  });
});
