import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-ledger',
  templateUrl: './supplier-ledger.component.html',
  styleUrls: ['./supplier-ledger.component.scss']
})
export class SupplierLedgerComponent implements OnInit {
  supplierTableData = [
    {
      date: new Date(),
      branch: 'bahawalpur',
      supplier: 'local',
      name: 'yasin malik',
      address: 'new york',
      phone: '03239303393',
      amount: 23
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
