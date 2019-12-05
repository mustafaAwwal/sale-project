import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  iconPack = {
    plus: faPlus
  }
  productList = [
    {
      id: 1,
      name: 'Bike',
      inStock: 'yes',
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  createHandlerFunction() {
    console.log('something')
  }
}
