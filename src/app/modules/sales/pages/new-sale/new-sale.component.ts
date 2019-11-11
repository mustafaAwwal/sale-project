import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss']
})
export class NewSaleComponent implements OnInit {
  iconPack = {
    plus: faPlus
  }
  customerTypes = [
    {
      type: 'Walk in Customer',
      value: 'walk in'
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
  newSaleForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.newSaleForm = this.fb.group({
      customerType: ['',[Validators.required]],
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
