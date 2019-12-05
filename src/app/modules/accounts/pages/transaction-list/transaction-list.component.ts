import { Component, OnInit } from '@angular/core';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  iconPack = {
    print: faPrint
  }
  tableData = [
    {
      date: 'November 8 2019',
      transactionNo: '#006',
      invoiceNo: '2019/11/2-0006',
      name: 'Walk in Customer',
      amount: 'Rs 12500',
      note: 'Paid for Invoice 2019/11/s-0006',
      type: 'credit'

    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
