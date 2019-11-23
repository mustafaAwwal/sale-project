import { Component, OnInit } from '@angular/core';
import { faBirthdayCake, faCross, faBicycle, faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  itemSearch = [
    {
      itemCategory: 'Frequent',
      items: [
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Birthday Cake'
        },
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Wrong Plus Sign'
        }
      ]
    },
    {
      itemCategory: 'Bikes',
      items: [
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Cycle'
        },
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Car'
        }
      ]
    },
    {
      itemCategory: 'Frequent',
      items: [
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Birthday Cake'
        },
        {
          icon: '../../../../../assets/slicing/item.png',
          name: 'Wrong Plus Sign'
        }
      ]
    }
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
