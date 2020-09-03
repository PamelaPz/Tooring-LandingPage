import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerIdeaHomeComponent } from './banner-idea-home.component';

describe('BannerIdeaHomeComponent', () => {
  let component: BannerIdeaHomeComponent;
  let fixture: ComponentFixture<BannerIdeaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerIdeaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerIdeaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
