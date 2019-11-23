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
  @Input() productList: any;
  singlePurchaseForm: FormGroup;
  iconPack = {
    plus: faPlus
  }
  @Output() singlePurchaseOutput = new EventEmitter<SinglePurchaseOutput>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.singlePurchaseForm = this.fb.group({
      productName: ['',[Validators.required]],
      unitPrice: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      subTotal: ['',[Validators.required]]
    })
  }
  addProduct(data) {
    this.singlePurchaseOutput.emit(data)
  }
}
