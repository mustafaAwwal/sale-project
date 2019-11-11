import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.scss']
})
export class NewPurchaseComponent implements OnInit { 
  iconPack = {
    plus: faPlus
  }
  suppliers= [
    {
      name: 'something'
    },
    {
      name: 'something else'
    }
  ]
  productList = [
    {
      name: 'Pepsi',
      value: 'ppi',
      code: 33301
    },
    {
      name: 'pizza',
      value: 'pza',
      code: 33302
    }
  ]
  paymentMethods = [
    {
      type: 'cash',
    },
    {
      type: 'cheque'
    },
    {
      type: 'others'
    }
  ]
  newPurchaseForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.newPurchaseForm = this.fb.group({
      supplierType: ['',[Validators.required]],
      productName: ['',[Validators.required]],
      unitPrice: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      subTotal: ['',[Validators.required]],
      total: ['',[Validators.required]],
      discount: ['',[Validators.required]],
      shippingCost: ['',[Validators.required]],
      netTotal: ['',[Validators.required]],
      paymentMethod: ['',[Validators.required]],
      paid: ['',[Validators.required]]
    })
  }
  submitForm(data) {
    console.log(data)
  }
}
