import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGlosaryComponent } from './page-glosary.component';

describe('PageGlosaryComponent', () => {
  let component: PageGlosaryComponent;
  let fixture: ComponentFixture<PageGlosaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGlosaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGlosaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
