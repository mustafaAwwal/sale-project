import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {
  showStatus = false;

  constructor() { }

  ngOnInit() {
  }
  statusChanger() {
    this.showStatus = !this.showStatus;
  }
}
