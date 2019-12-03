import { Component, OnInit, Input } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {
  @Input() incomingData: any;
  dataSource: any;
  columnsToDisplay = ['id','name','subCategory','actions']
  iconPack = {
    edit: faEdit,
    delete: faTrash
  }
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData);

  }
  editHandler(row) {
  }
  deleteHandler(row) {
  }
}
