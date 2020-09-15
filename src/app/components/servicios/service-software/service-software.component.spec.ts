import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSoftwareComponent } from './service-software.component';

describe('ServiceSoftwareComponent', () => {
  let component: ServiceSoftwareComponent;
  let fixture: ComponentFixture<ServiceSoftwareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSoftwareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
