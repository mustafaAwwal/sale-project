import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  categories = [
    {
      name: 'bikes',
      value: 'bike'
    },
    {
      name: 'phones',
      value: 'phone'
    }
  ]
  status = [
    {
      value: 'active',
      name: 'active'
    },
    {
      value: 'inactive',
      name: 'inactive'
    }
  ]
  subCategories = []
  constructor() { }

  ngOnInit() {
  }

}
