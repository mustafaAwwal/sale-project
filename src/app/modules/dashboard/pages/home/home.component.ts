import { Component, OnInit } from '@angular/core';
import { faBoxes, faHandHoldingUsd, faShoppingCart, faChartPie, faTag, faTags, faIndustry, faChartLine, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  statCards = [
    {
      icon: faBoxes,
      heading: 'Product',
      background: '#00BCA4',
      stat: [
        {
          statName: 'Total Products',
          statValue: 12
        },
        {
          statName: 'Zero Products',
          statValue: 32
        }
      ]
    },
    {
      icon: faHandHoldingUsd,
      heading: 'Purchase',
      background: '#984DFF',
      stat: [
        {
          statName: 'Total Purchases',
          statValue: 213123
        }
      ]
    },
    {
      icon: faShoppingCart,
      heading: 'Sales',
      background: '#65A6FF',
      stat: [
        {
          statName: 'Total Sales',
          statValue: 213213
        }
      ]
    },
    {
      icon: faChartPie,
      heading: 'Stock',
      background: '#E67E22',
      stat: [
        {
          statName: 'Total Stock',
          statValue: 12312312
        }
      ]
    },
    {
      icon: faIndustry,
      heading: 'Branch',
      background: '#2D2D2D',
      stat: [
        {
          statName: 'Total Branches',
          statValue: 12,
        },
        {
          statName: 'Open Branches',
          statValue: 6
        },
        {
          statName: 'Cloesed Branches',
          statValue: 6
        },
      ]
    },
    {
      icon: faChartLine,
      heading: 'Profit',
      background: '#DB3B8A',
      stat: [
        {
          statName: 'Total profit',
          statValue: 12,
        },
      ]
    },
    // {
    //   icon: faRocket,
    //   heading: 'Reactive Store',
    //   background: 'seagreen'
    // }
  ]
  constructor() { }

  ngOnInit() {
  }

}
