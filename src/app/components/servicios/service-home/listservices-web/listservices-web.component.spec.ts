import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListservicesWebComponent } from './listservices-web.component';

describe('ListservicesWebComponent', () => {
  let component: ListservicesWebComponent;
  let fixture: ComponentFixture<ListservicesWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListservicesWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListservicesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
