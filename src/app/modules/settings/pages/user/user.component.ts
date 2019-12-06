import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  iconPack = {
    plus: faPlus
  }
  tableData = [
    {
      id: '2',
      name: 'Super User',
      email: 'info@vos.com',
      role: 'Super User'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  createHandlerFunction() {
  }
}
