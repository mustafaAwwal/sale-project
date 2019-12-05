import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  columnsToDisplay: String[] = ['id','name','inStock','Actions']
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @Input() incomingData: any;
  dataSource: any;
  constructor() { }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData);
    this.dataSource.paginator = this.paginator
    this.dataSource.sort      = this.sort
  
  }
  editHandler(row) {

  }
  detailHandler(row) {

  }
  searchFilter(searchFilter) {
    this.dataSource.filter = searchFilter
  }
}
