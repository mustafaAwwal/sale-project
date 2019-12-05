import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {
  @Input() incomingData: any;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  dataSource: any;
  columnsToDisplay = ['id','name','subCategory','actions']
  iconPack = {
    edit: faEdit,
    delete: faTrash
  }
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData);
    this.dataSource.paginator = this.paginator
    this.dataSource.sort      = this.sort
  }
  editHandler(row) {
  }
  deleteHandler(row) {
  }
  searchFilter(filterText:String) {
    this.dataSource.filter = filterText.trim().toLowerCase()
  }
}
