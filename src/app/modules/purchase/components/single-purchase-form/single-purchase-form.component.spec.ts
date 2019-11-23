import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePurchaseFormComponent } from './single-purchase-form.component';

describe('SinglePurchaseFormComponent', () => {
  let component: SinglePurchaseFormComponent;
  let fixture: ComponentFixture<SinglePurchaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePurchaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePurchaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
