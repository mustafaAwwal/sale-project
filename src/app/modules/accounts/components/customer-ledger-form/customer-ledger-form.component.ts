import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-ledger-form',
  templateUrl: './customer-ledger-form.component.html',
  styleUrls: ['./customer-ledger-form.component.scss']
})
export class CustomerLedgerFormComponent implements OnInit {
  visibleState = false;
  ledgerForm: FormGroup;
  iconPack = {
    cross: faTimes
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }
  visibleStateToggler() {
    this.visibleState = !this.visibleState;
  }
  createForm() {
    this.ledgerForm = this.fb.group({
      date: ['',Validators.required],
      branch: ['',Validators.required],
      customer: ['',Validators.required],
      name: ['',Validators.required],
      address: ['',Validators.required],
      phone: ['',Validators.required],
      amount: ['',Validators.required],
    })
  }
  formFiller(formData) {
    this.ledgerForm.patchValue(formData)
  }
}
