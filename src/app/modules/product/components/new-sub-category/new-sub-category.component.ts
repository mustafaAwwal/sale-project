import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-sub-category',
  templateUrl: './new-sub-category.component.html',
  styleUrls: ['./new-sub-category.component.scss']
})
export class NewSubCategoryComponent implements OnInit {
  showStatus = false;
  categoryTypes =[
    {
      name: 'bike',
      value: 'bike'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  statusChanger() {
    this.showStatus = !this.showStatus;
  }
}
