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
      unitPrice  : ['',[Validators.required]],
      quantity   : ['',[Validators.required]],
      subTotal   : ['',[Validators.required]]
    })
  }
  addProduct(data) {
    this.singleFormOutput.emit(data)
  }
}
