import { Component, OnInit } from '@angular/core';
import { ProductSearch } from 'src/app/shared/modals';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  searchQuery = new FormControl('')
  itemSearch:ProductSearch[] = [
    {
      itemCategory: 'Frequent',
      items: [
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Birthday Cake',
          unitPrice: 500
        },
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Wrong Plus Sign',
          unitPrice: 500
        }
      ]
    },
    {
      itemCategory: 'Bikes',
      items: [
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Cycle',
          unitPrice: 500
        },
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Car',
          unitPrice: 500
        }
      ]
    },
    {
      itemCategory: 'Frequent',
      items: [
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Birthday Cake',
          unitPrice: 500
        },
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Wrong Plus Sign',
          unitPrice: 500
        }
      ]
    }
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
