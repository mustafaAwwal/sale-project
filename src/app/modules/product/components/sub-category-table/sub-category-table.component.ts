import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sub-category-table',
  templateUrl: './sub-category-table.component.html',
  styleUrls: ['./sub-category-table.component.scss']
})
export class SubCategoryTableComponent implements OnInit {
  @Input() incomingData: any;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  iconPack = {
    edit: faEdit,
    delete: faTrash
  }
  columnsToDisplay= ['id','name','category','actions']
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort      = this.sort;
  }
  editHandler(row) {
  }
  deleteHandler(row) {
  }
  searchFilter(searchText) {
    this.dataSource.filter = searchText
  }
}
