import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule } from '@angular/material';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
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
    }
  ]
  displayedColumns: String[] = ['date', 'invoice','customer','netTotal','paid','actions']
  constructor() { }

  ngOnInit() {
  }
}
