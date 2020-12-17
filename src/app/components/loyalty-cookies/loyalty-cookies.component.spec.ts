import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoyaltyCookiesComponent } from './loyalty-cookies.component';

describe('LoyaltyCookiesComponent', () => {
  let component: LoyaltyCookiesComponent;
  let fixture: ComponentFixture<LoyaltyCookiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyCookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
