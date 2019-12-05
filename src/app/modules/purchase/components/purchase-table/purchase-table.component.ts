import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-purchase-table',
  templateUrl: './purchase-table.component.html',
  styleUrls: ['./purchase-table.component.scss']
})
export class PurchaseTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: any;
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
      netTotal: '3000',
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
    },    {
      date: 'November 8 2018',
      billNo:'1',
      supplier: 'pizza hutt',
      netTotal: '30000',
      paid: '25000'
    },    {
      date: 'November 8 2018',
      billNo:'1',
      supplier: 'pizza hutt',
      netTotal: '30000',
      paid: '25000'
    },    {
      date: 'November 8 2018',
      billNo:'1',
      supplier: 'pizza hutt',
      netTotal: '30000',
      paid: '25000'
    },    {
      date: 'November 8 2018',
      billNo:'1',
      supplier: 'pizza hutt',
      netTotal: '30000',
      paid: '25000'
    },    {
      date: 'November 8 2018',
      billNo:'1',
      supplier: 'pizza hutt',
      netTotal: '30000',
      paid: '25000'
    },    {
      date: 'November 8 2018',
      billNo:'1',
      supplier: 'pizza hutt',
      netTotal: '30000',
      paid: '25000'
    },    {
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
    this.dataSource = new MatTableDataSource(this.purchaseData);
    this.dataSource.paginator = this.paginator
    this.dataSource.sort      = this.sort
  }
  filterTableFunction(filterText: String) {
    this.dataSource.filter = filterText.trim().toLowerCase()
  }
}
