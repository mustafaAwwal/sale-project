import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  iconPack = {
    plus: faPlus
  }
  tableData = [
    {
      id: '1',
      name: 'Default Supplier',
      companyName: 'N/A',
      phone: 'N/A',
      address: 'N/A'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  createHandlerFunction() {
  }

}
