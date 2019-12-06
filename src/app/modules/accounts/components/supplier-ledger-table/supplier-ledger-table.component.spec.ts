import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierLedgerTableComponent } from './supplier-ledger-table.component';

describe('SupplierLedgerTableComponent', () => {
  let component: SupplierLedgerTableComponent;
  let fixture: ComponentFixture<SupplierLedgerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierLedgerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierLedgerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
