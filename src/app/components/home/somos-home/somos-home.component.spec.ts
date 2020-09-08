import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomosHomeComponent } from './somos-home.component';

describe('SomosHomeComponent', () => {
  let component: SomosHomeComponent;
  let fixture: ComponentFixture<SomosHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomosHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
