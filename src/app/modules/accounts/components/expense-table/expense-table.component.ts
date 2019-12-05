import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.scss']
})
export class ExpenseTableComponent implements OnInit {
  @Input() incomingData: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  columnsToDisplay= ['id','purpose','amount','date','actions']
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort      = this.sort
  }
  searchFilter(filterText) {
    this.dataSource.filter = filterText
  }

}
