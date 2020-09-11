import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessWebComponent } from './process-web.component';

describe('ProcessWebComponent', () => {
  let component: ProcessWebComponent;
  let fixture: ComponentFixture<ProcessWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
