import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfLogsViewerComponent } from './cf-logs-viewer.component';

describe('CfLogsViewerComponent', () => {
  let component: CfLogsViewerComponent;
  let fixture: ComponentFixture<CfLogsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfLogsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfLogsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
