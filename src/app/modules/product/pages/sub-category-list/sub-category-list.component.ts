import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sub-category-list',
  templateUrl: './sub-category-list.component.html',
  styleUrls: ['./sub-category-list.component.scss']
})
export class SubCategoryListComponent implements OnInit {
  iconPack = {
    plus: faPlus
  }
  tableData = [
    {
      id: '',
      name: 'heavy bike',
      category: 'bike'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
