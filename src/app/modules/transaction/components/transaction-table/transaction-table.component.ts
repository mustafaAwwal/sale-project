import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {
  @Input() incomingData: any;
  dataSource: MatTableDataSource<any>;
  columnsToDisplay = ['date','transactionNo','invoiceNo','name','amount','note','type','actions']
  iconPack = {
    print: faPrint
  }
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData)
  }

}
