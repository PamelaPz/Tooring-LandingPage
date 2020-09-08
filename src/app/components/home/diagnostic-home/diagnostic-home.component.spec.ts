import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticHomeComponent } from './diagnostic-home.component';

describe('DiagnosticHomeComponent', () => {
  let component: DiagnosticHomeComponent;
  let fixture: ComponentFixture<DiagnosticHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
