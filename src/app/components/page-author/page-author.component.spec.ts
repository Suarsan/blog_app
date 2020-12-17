import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageAuthorComponent } from './page-author.component';

describe('PageAuthorComponent', () => {
  let component: PageAuthorComponent;
  let fixture: ComponentFixture<PageAuthorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
