import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSponsoredComponent } from './page-sponsored.component';

describe('PageSponsoredComponent', () => {
  let component: PageSponsoredComponent;
  let fixture: ComponentFixture<PageSponsoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSponsoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSponsoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});