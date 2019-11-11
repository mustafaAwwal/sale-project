import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material';
export const productList = [
  {
    id: '1',
    name: 'united(UN1007)',
    inStock: -16
  }
]
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  columnsToDisplay: String[] = ['id','name','inStock','Actions']
  productListData = new MatTableDataSource(productList)
  constructor() { }

  ngOnInit() {
  }
}
