import { Component, OnInit } from '@angular/core';
import { faBoxes, faHandHoldingUsd, faShoppingCart, faChartPie, faTag, faTags, faIndustry, faChartLine, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.scss']
})
export class ReportDashboardComponent implements OnInit {
  reportCards = [
    {
      icon: faBoxes,
      heading: 'Product',
      background: '#00BCA4'
    },
    {
      icon: faHandHoldingUsd,
      heading: 'Purchase',
      background: '#984DFF'
    },
    {
      icon: faShoppingCart,
      heading: 'Sales',
      background: '#65A6FF'
    },
    {
      icon: faChartPie,
      heading: 'Stock',
      background: '#E67E22'
    },
    {
      icon: faTag,
      heading: 'Category',
      background: '#AB6666'
    },
    {
      icon: faTags,
      heading: 'Sub Category',
      background: '#4E7D75'
    },
    {
      icon: faIndustry,
      heading: 'Branch',
      background: '#2D2D2D'
    },
    {
      icon: faChartLine,
      heading: 'Profit',
      background: '#DB3B8A'
    },
    {
      icon: faRocket,
      heading: 'Reactive Store',
      background: 'seagreen'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
