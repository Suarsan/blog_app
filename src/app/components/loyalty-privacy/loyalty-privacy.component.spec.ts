import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyPrivacyComponent } from './loyalty-privacy.component';

describe('LoyaltyPrivacyComponent', () => {
  let component: LoyaltyPrivacyComponent;
  let fixture: ComponentFixture<LoyaltyPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
