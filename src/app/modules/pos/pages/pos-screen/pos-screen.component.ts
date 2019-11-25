import { Component, OnInit } from '@angular/core';
import { ProductSearch, Items } from 'src/app/shared/modals';

@Component({
  selector: 'app-pos-screen',
  templateUrl: './pos-screen.component.html',
  styleUrls: ['./pos-screen.component.scss']
})
export class PosScreenComponent implements OnInit {
  clickedItem: Items;
  itemSearch: ProductSearch[] =[
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
  addProduct(data) {
    this.clickedItem = new Items(data);
  }
  
}
