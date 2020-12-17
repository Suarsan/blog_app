import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageTagComponent } from './page-tag.component';

describe('PageTagComponent', () => {
  let component: PageTagComponent;
  let fixture: ComponentFixture<PageTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
