import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-vat-table',
  templateUrl: './vat-table.component.html',
  styleUrls: ['./vat-table.component.scss']
})
export class VatTableComponent implements OnInit {
  @Input() incomingData: any;
  dataSource: MatTableDataSource<any>;
  columnsToDisplay=['id','name','type','rate','actions']
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.incomingData)
  }

}
