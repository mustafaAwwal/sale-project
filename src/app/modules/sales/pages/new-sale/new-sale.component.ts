import { Component, OnInit } from '@angular/core';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss']
})
export class NewSaleComponent implements OnInit {
  iconPack = {
    plus: faPlus,
    cross:  faTimes
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
      code: 33301,
      unitPrice: 300
    },
    {
      name: 'pizza',
      value: 'pza',
      code: 33302,
      unitPrice: 3000
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
  
  createProduct() {
    return this.fb.group({
      productName: ['',[Validators.required]],
      unitPrice: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      subTotal: ['',[Validators.required]],
    })
  }
  get products() {
    return this.newSaleForm.get('products') as FormArray
  }
  
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
    this.newSaleForm.patchValue({
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
