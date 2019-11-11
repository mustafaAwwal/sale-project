import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-table',
  templateUrl: './purchase-table.component.html',
  styleUrls: ['./purchase-table.component.scss']
})
export class PurchaseTableComponent implements OnInit {
  purchaseData = [
    {
      date: 'November 8 2018',
      billNo:'1',
      supplier: 'pizza hutt',
      netTotal: '30000',
      paid: '25000'
    },
    {
      date: 'November 8 2018',
      billNo:'1',
      supplier: 'pizza hutt',
      netTotal: '30000',
      paid: '25000'
    },
    {
      date: 'November 8 2018',
      billNo:'1',
      supplier: 'pizza hutt',
      netTotal: '30000',
      paid: '25000'
    }
  ]
  columnsToDisplay: String[]= ['date','billNo','supplier','netTotal','paid','actions']
  constructor() { }

  ngOnInit() {
  }

}
