import { Component, OnInit, Input } from '@angular/core';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-supplier-table',
  templateUrl: './supplier-table.component.html',
  styleUrls: ['./supplier-table.component.scss']
})
export class SupplierTableComponent implements OnInit {
  @Input() incomingData: any;
  dataSource: any;
  iconPack= {
    edit: faEdit,
    details: faEye
  }
  columnsToDisplay: String[] = ['id','name','companyName','phone','address','actions']
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData)
  }
  editHandler(row) {

  }
  detailHandler(row) {
    
  }
}
