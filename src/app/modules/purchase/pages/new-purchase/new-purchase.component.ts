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
      code: 33301,
      unitPrice: '300'
    },
    {
      name: 'pizza',
      value: 'pza',
      code: 33302,
      unitPrice: '3000'
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
  
  deleteProduct(index) {
    this.products.removeAt(index)
  }
  submitForm(data) {
    console.log(data)
  }
  addSingleProduct(data){
    let group:FormGroup = this.createProduct();
    group.patchValue(data)
    this.products.push(group);
    this.calculatingNetValue()
  }
  calculatingNetValue() {
    const rawValue = this.products.getRawValue()
    let netTotal = 0;
    for(let entry of rawValue){
      netTotal +=entry.subTotal;
    }
    this.newPurchaseForm.patchValue({
      netTotal: netTotal
    })
  }
  updateFormProduct(data,index) {
    let product = this.productList.find(x => x.value==data.value)
    // this.saleSingleForm.patchValue({
    //   unitPrice: product.unitPrice,
    //   subTotal: product.unitPrice*this.quantity
    // })
    this.products.controls[index].patchValue({
      unitPrice: product.unitPrice
    })
    this.quantityChange(index)
  }
  quantityChange(index){
    let currentGroup = this.products.controls[index] as FormGroup;
    const unitPrice  = currentGroup.controls['unitPrice'].value
    const quantity   = currentGroup.controls['quantity'].value
    const subTotal   = unitPrice*quantity
    currentGroup.patchValue({
      subTotal: subTotal
    })
    this.calculatingNetValue()
  }
}

