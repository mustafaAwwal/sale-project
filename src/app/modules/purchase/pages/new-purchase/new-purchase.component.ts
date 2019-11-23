import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.scss']
})
export class NewPurchaseComponent implements OnInit { 
  productListQuantity = 0;
  iconPack = {
    plus: faPlus,
    cross: faTimes
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
      total: ['',[Validators.required]],
      discount: ['',[Validators.required]],
      shippingCost: ['',[Validators.required]],
      netTotal: ['',[Validators.required]],
      paymentMethod: ['',[Validators.required]],
      paid: ['',[Validators.required]],
      products: this.fb.array([
      ])
    })
  }
  get products() {
    return this.newPurchaseForm.get('products') as FormArray;
  }
  createProduct(): FormGroup {
    return this.fb.group({
      productName: ['',[Validators.required]],
      unitPrice: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      subTotal: ['',[Validators.required]]
    })
  };
  addProducts() {
    this.products.push(
      this.createProduct())
    this.productListQuantity += 1;
  }
  deleteProduct(index) {
    this.products.removeAt(index)
    this.productListQuantity -= 1;
  }
  submitForm(data) {
    console.log(data)
  }
  addSingleProduct(data) {
    console.log(data)
    let group: FormGroup  = this.createProduct()
    group.patchValue(data)
    this.products.push(group)
  }
}

