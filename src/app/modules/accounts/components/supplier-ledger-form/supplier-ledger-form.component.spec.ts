import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierLedgerFormComponent } from './supplier-ledger-form.component';

describe('SupplierLedgerFormComponent', () => {
  let component: SupplierLedgerFormComponent;
  let fixture: ComponentFixture<SupplierLedgerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierLedgerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierLedgerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
