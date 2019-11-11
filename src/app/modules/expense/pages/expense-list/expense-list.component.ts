import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  iconPack = {
    plus: faPlus
  }
  tableData = [
    {
      id: '1',
      purpose: 'Something',
      amount: 'Rs 12500',
      date: 'November 8 2019'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
