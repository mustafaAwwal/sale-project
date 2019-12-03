import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableModule, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource : any;
  saleData = [
    {
      date: 'November 8th, 2019',
      invoice: '2019/11/s-0006',
      customer: 'walk in customer',
      netTotal: 'Rs 12500.00',
      paid: 'Rs 12500.00',
    },
    {
      date: 'November 8th, 2019',
      invoice: '2019/11/s-0006',
      customer: 'walk in customer',
      netTotal: 'Rs 12500.00',
      paid: 'Rs 12500.00',
    },
    {
      date: 'November 8th, 2019',
      invoice: '2019/11/s-0006',
      customer: 'walk in customer',
      netTotal: 'Rs 12500.00',
      paid: 'Rs 12500.00',
    },
    {
      date: 'November 8th, 2019',
      invoice: '2019/11/s-0006',
      customer: 'walk in customer',
      netTotal: 'Rs 12500.00',
      paid: 'Rs 12500.00',
    },
    {
      date: 'November 8th, 2019',
      invoice: '2019/11/s-0006',
      customer: 'walk in customer',
      netTotal: 'Rs 12500.00',
      paid: 'Rs 12500.00',
    },
    {
      date: 'November 8th, 2019',
      invoice: '2019/11/s-0006',
      customer: 'walk in customer',
      netTotal: 'Rs 12500.00',
      paid: 'Rs 12500.00',
    },
    {
      date: 'November 8th, 2019',
      invoice: '2019/11/s-0006',
      customer: 'walk in customer',
      netTotal: 'Rs 12500.00',
      paid: 'Rs 12500.00',
    },
    {
      date: 'November 8th, 2019',
      invoice: '2019/11/s-0006',
      customer: 'walk in customer',
      netTotal: 'Rs 12500.00',
      paid: 'Rs 12500.00',
    },
    {
      date: 'November 8th, 2019',
      invoice: '2019/11/s-0006',
      customer: 'walk out customer',
      netTotal: 'Rs 12500.00',
      paid: 'Rs 125.00',
    }
  ]
  displayedColumns: String[] = ['date', 'invoice','customer','netTotal','paid','actions']
  constructor() {
    
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.saleData);
    this.dataSource.paginator = this.paginator
    this.dataSource.sort      = this.sort
    
  }
  filterTableFunction(filterText:String) {
    this.dataSource.filter = filterText.trim().toLowerCase()
  }
}
