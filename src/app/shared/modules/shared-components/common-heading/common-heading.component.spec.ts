import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHeadingComponent } from './common-heading.component';

describe('CommonHeadingComponent', () => {
  let component: CommonHeadingComponent;
  let fixture: ComponentFixture<CommonHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
