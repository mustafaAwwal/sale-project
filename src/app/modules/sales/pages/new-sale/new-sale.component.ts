import { Component, OnInit } from '@angular/core';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss']
})
export class NewSaleComponent implements OnInit {
  productListLength = 0;
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
  addProduct() {
    this.products.push(this.createProduct())
    this.productListLength += 1;
  }
  deleteProduct(index) {
    this.products.removeAt(index)
    this.productListLength -= 1;
  }
  submitForm(data) {
    console.log(data)
  }
  addSingleProduct(data){
    let group:FormGroup = this.createProduct();
    group.patchValue(data)
    this.products.push(group)
  }
}
