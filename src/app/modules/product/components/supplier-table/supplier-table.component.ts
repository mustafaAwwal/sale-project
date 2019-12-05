import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-supplier-table',
  templateUrl: './supplier-table.component.html',
  styleUrls: ['./supplier-table.component.scss']
})
export class SupplierTableComponent implements OnInit {
  @Input() incomingData: any;
  @ViewChild(MatPaginator, {static: true}) paginator:MatPaginator;
  @ViewChild(MatSort, {static: true}) sort:MatSort;
  
  dataSource: any;
  iconPack= {
    edit: faEdit,
    details: faEye
  }
  columnsToDisplay: String[] = ['id','name','companyName','phone','address','actions']
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
  editHandler(row) {

  }
  detailHandler(row) {
    
  }
  filterTable(filterText) {
    this.dataSource.filter = filterText
  }
}
