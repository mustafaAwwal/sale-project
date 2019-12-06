import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLedgerFormComponent } from './customer-ledger-form.component';

describe('CustomerLedgerFormComponent', () => {
  let component: CustomerLedgerFormComponent;
  let fixture: ComponentFixture<CustomerLedgerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLedgerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLedgerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
