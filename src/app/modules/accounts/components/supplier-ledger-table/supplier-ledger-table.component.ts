import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SupplierLedgerFormComponent } from '../supplier-ledger-form/supplier-ledger-form.component';

@Component({
  selector: 'app-supplier-ledger-table',
  templateUrl: './supplier-ledger-table.component.html',
  styleUrls: ['./supplier-ledger-table.component.scss']
})
export class SupplierLedgerTableComponent implements OnInit {
  @Input() incomingData: any;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(SupplierLedgerFormComponent,{static:true}) form: SupplierLedgerFormComponent;
  dataSource: MatTableDataSource<any>;
  columnsToDisplay = ['date','branch','supplier','name','address','phone','amount','actions']
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  searchFilter(searchText:String){
    this.dataSource.filter = searchText.trim().toLowerCase();
  }
  openForm(row) {
    console.log(row)
    this.form.visibleStateToggler()
    this.form.formFiller(row)
  }
}
