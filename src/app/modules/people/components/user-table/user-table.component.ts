import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input() incomingData: any;
  dataSource: any;
  iconPack = {
    edit: faEdit
  }
  columnsToDisplay = ['id','name','email','role','actions']
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData)
    console.log(this.dataSource.data)
  }
  editHandler(row) {

  }
  detailHandler(row) {
    
  }
}
