import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBrandComponent } from './page-brand.component';

describe('PageBrandComponent', () => {
  let component: PageBrandComponent;
  let fixture: ComponentFixture<PageBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
