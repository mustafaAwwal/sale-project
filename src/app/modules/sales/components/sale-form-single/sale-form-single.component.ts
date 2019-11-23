import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SaleSingleOutput } from 'src/app/shared/modals';

@Component({
  selector: 'app-sale-form-single',
  templateUrl: './sale-form-single.component.html',
  styleUrls: ['./sale-form-single.component.scss']
})
export class SaleFormSingleComponent implements OnInit {
  iconPack = {
    plus: faPlus
  }
  @Output() singleFormOutput= new EventEmitter<SaleSingleOutput>();
  @Input() productList: any;
  saleSingleForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }
  
  createForm(){
    this.saleSingleForm = this.fb.group({
      productName: ['',[Validators.required]],
      unitPrice  : ['0',[Validators.required]],
      quantity   : ['1',[Validators.required]],
      subTotal   : ['0',[Validators.required]]
    })
  }
  addProduct(data) {
    this.singleFormOutput.emit(data)
    this.saleSingleForm.patchValue({
      productName: '',
      unitPrice: 0,
      quantity: 1,
      subTotal: 0
    })
    
  }
  updateFormProduct(data) {
    let product = this.productList.find(x => x.value==data.value)
    this.saleSingleForm.patchValue({
      unitPrice: product.unitPrice,
      subTotal: product.unitPrice*this.quantity
    })
  }
  quantityChange(data) {
    this.saleSingleForm.patchValue({
      subTotal: data.target.value*this.unitPrice
    })
  }
  get unitPrice() {
    return this.saleSingleForm.controls['unitPrice'].value
  }
  get quantity() {
    return this.saleSingleForm.controls['quantity'].value
  }
}
