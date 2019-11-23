import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.scss']
})
export class VatComponent implements OnInit {
  tableData = [
    {
      id: '1',
      name: 'No Tax',
      type: 'percentage',
      rate: '0'
    },
    {
      id: '2',
      name: 'Zero Percent(0%)',
      type: 'percentage',
      rate: '0'
    }
  ]
  iconPack = {
    plus: faPlus
  }
  constructor() { }

  ngOnInit() {
  }

}
