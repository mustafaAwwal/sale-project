import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductSearch } from 'src/app/shared/modals';
import { FormControl } from '@angular/forms';
import {Items} from '../../../../shared/modals'
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  @Output() productTrigger = new EventEmitter<Items>()
  searchQuery = new FormControl('')
  @Input() itemSearch:ProductSearch[];
  constructor() { }

  ngOnInit() {
  }
  productTriggerFunction(item) {
    this.productTrigger.emit(item)
  }
}
