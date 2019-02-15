import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfSpacesComponent } from './cf-spaces.component';

describe('CfSpacesComponent', () => {
  let component: CfSpacesComponent;
  let fixture: ComponentFixture<CfSpacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfSpacesComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
