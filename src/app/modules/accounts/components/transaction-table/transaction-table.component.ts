import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {
  @Input() incomingData: any;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  columnsToDisplay = ['date','transactionNo','invoiceNo','name','amount','note','type','actions']
  iconPack = {
    print: faPrint
  }
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort      = this.sort;
  }
  editHandler(row) {

  }
  detailHandler(row) {
    
  }
  searchFilter(searchText: String) {
    this.dataSource.filter = searchText.trim().toLowerCase();
  }
}
