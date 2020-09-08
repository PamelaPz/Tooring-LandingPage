import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTorringComponent } from './banner-torring.component';

describe('BannerTorringComponent', () => {
  let component: BannerTorringComponent;
  let fixture: ComponentFixture<BannerTorringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerTorringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTorringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
