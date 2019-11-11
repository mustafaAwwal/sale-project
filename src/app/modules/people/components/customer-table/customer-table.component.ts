import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  @Input() incomingData:any;
  dataSource: any;
  columnsToDisplay: String[] = ['id','name','companyName','totalDue','phone','actions']
  iconPack = {
    edit: faEdit,
    details: faEye
  }
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData);
  }
  editHandler(row) {

  }
  detailHandler(row) {
    
  }
}
