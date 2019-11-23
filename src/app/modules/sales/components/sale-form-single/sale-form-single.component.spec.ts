import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleFormSingleComponent } from './sale-form-single.component';

describe('SaleFormSingleComponent', () => {
  let component: SaleFormSingleComponent;
  let fixture: ComponentFixture<SaleFormSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleFormSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleFormSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
