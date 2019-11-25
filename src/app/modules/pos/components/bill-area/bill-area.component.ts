import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { faPlus, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Items } from 'src/app/shared/modals';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-bill-area',
  templateUrl: './bill-area.component.html',
  styleUrls: ['./bill-area.component.scss']
})
export class BillAreaComponent implements OnInit,OnChanges {
  @Input() incomingItem: Items;
  iconPack = {
    plus: faPlus,
    delete: faTrash,
    cross: faTimes
  }
  billAreaForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }
  ngOnChanges() {
    if(typeof(this.incomingItem) != 'undefined'){
      this.addProduct(this.incomingItem)
    }
  }
  createForm() {
    this.billAreaForm = this.fb.group({
      customerType: ['',[Validators.required]],
      totalItem: ['',[Validators.required]],
      total: ['',[Validators.required]],
      discount: [''],
      amount: ['',[Validators.required]],
      vat: [''],
      finalTotal: ['',[Validators.required]],
      products: this.fb.array([])
    })
  }
  createProduct() {
    return this.fb.group({
      productName: ['',[Validators.required]],
      quantity: ['1',[Validators.required]],
      unitPrice: ['',[Validators.required]],
      subTotal: ['0',[Validators.required]]
    })
  }
  get products() {
    return this.billAreaForm.get('products') as FormArray;
  }
  addProduct(product: Items) {
    let group: FormGroup = this.createProduct()
    group.patchValue({
      productName: product.name,
      unitPrice: product.unitPrice,
      subTotal: product.unitPrice
    })
    this.products.push(group)
    this.settingTotals()
  }
  quantityChange(event,index) {
    const unitPrice = this.products.controls[index].value['unitPrice']
    const subTotal = event.target.value * unitPrice
    this.products.controls[index].patchValue({
      subTotal: subTotal
    })
    this.settingTotals()
  }
  deleteProduct(index) {
    this.products.removeAt(index)
    this.settingTotals()
  }
  settingTotals() {
    let rawData = this.products.getRawValue();
    let total   = 0;
    for (let i=0;i<rawData.length;i++){
      total += rawData[i].subTotal
    }
    this.billAreaForm.patchValue({
      totalItem: rawData.length,
      total: total
    })
    this.settingFinalTotal()
  }
  settingFinalTotal() {
    let total      = this.billAreaForm.controls['total'].value
    const discount:string = this.billAreaForm.controls['discount'].value
    let amount = 0;
    if( discount.indexOf('%') != -1){
      let discountPercentage = parseInt(discount.slice(0,discount.length-1))
      amount = (total/100)*discountPercentage
      total = total - amount
    }
    else if(!isNaN(Number(discount))){
      total -= Number(discount)
      amount = Number(discount)
    }
    this.billAreaForm.patchValue({
      finalTotal: total,
      amount: amount
    })
  }
  submitForm(formData){
    console.log(formData)
  }
  resetForm() {
    this.createForm()
  }
}
