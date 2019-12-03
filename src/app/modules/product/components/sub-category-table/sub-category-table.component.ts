import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sub-category-table',
  templateUrl: './sub-category-table.component.html',
  styleUrls: ['./sub-category-table.component.scss']
})
export class SubCategoryTableComponent implements OnInit {
  @Input() incomingData: any;
  dataSource: MatTableDataSource<any>;
  iconPack = {
    edit: faEdit,
    delete: faTrash
  }
  columnsToDisplay= ['id','name','category','actions']
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData)
  }
  editHandler(row) {
  }
  deleteHandler(row) {
  }
}
