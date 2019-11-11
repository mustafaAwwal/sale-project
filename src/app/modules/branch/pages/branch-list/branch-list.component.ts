import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
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
