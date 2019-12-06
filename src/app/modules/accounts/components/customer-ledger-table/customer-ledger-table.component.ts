import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-customer-ledger-table',
  templateUrl: './customer-ledger-table.component.html',
  styleUrls: ['./customer-ledger-table.component.scss']
})
export class CustomerLedgerTableComponent implements OnInit {
  columnsToDisplay = ['date','branch','customer','name','address','phone','amount','actions']
  @Input() incomingData: any;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  dataSource: any;
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort      = this.sort;
  }
  searchFilterText(searchText: String) {
    this.dataSource.filter = searchText.trim().toLowerCase()
  }
}
