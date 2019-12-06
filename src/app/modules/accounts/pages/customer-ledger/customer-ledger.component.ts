import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-ledger',
  templateUrl: './customer-ledger.component.html',
  styleUrls: ['./customer-ledger.component.scss']
})
export class CustomerLedgerComponent implements OnInit {
  ledgerData = [
    {
      date: new Date(),
      branch: 'bahawalpur',
      customer: 'online',
      name: 'Yasin Malik',
      address: 'main Bazar',
      phone: '03239304423',
      amount: 23
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
