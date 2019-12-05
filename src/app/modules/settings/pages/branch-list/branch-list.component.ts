import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  iconPack = {
    plus: faPlus
  }
  tableData = [
    {
      id: '1',
      name: 'Ware House',
      address: 'F-8/3',
      phone: '051-6753464',
      inChargeName: 'Arslan Aslam'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
