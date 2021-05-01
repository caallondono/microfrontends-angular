import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTest1Component } from './page-test1.component';

describe('PageTest1Component', () => {
  let component: PageTest1Component;
  let fixture: ComponentFixture<PageTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
