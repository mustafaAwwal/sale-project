import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
    tableData = [
      {
        id: '1',
        name: 'Walk In Customer',
        companyName: 'N/a',
        totalDue: '--',
        phone: 'N/A'
      }
    ]
    iconPack = {
      plus: faPlus
    }
  constructor() { }

  ngOnInit() {
  }
  createHandlerFunction() {
  }
}
