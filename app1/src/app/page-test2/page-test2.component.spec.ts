import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTest2Component } from './page-test2.component';

describe('PageTest2Component', () => {
  let component: PageTest2Component;
  let fixture: ComponentFixture<PageTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
