import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SinglePurchaseOutput } from 'src/app/shared/modals';

@Component({
  selector: 'app-single-purchase-form',
  templateUrl: './single-purchase-form.component.html',
  styleUrls: ['./single-purchase-form.component.scss']
})
export class SinglePurchaseFormComponent implements OnInit {
  iconPack = {
    plus: faPlus
  }
  @Output() singleFormOutput= new EventEmitter<SinglePurchaseOutput>();
  @Input() productList: any;
  singlePurchaseForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }
  
  createForm(){
    this.singlePurchaseForm = this.fb.group({
      productName: ['',[Validators.required]],
      unitPrice  : ['0',[Validators.required]],
      quantity   : ['1',[Validators.required]],
      subTotal   : ['0',[Validators.required]]
    })
  }
  addProduct(data) {
    this.singleFormOutput.emit(data)
    this.singlePurchaseForm.patchValue({
      productName: '',
      unitPrice: 0,
      quantity: 1,
      subTotal: 0
    })
    
  }
  updateFormProduct(data) {
    let product = this.productList.find(x => x.value==data.value)
    this.singlePurchaseForm.patchValue({
      unitPrice: product.unitPrice,
      subTotal: product.unitPrice*this.quantity
    })
  }
  quantityChange(data) {
    this.singlePurchaseForm.patchValue({
      subTotal: data.target.value*this.unitPrice
    })
  }
  get unitPrice() {
    return this.singlePurchaseForm.controls['unitPrice'].value
  }
  get quantity() {
    return this.singlePurchaseForm.controls['quantity'].value
  }
}
