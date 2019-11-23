import { Component, OnInit } from '@angular/core';
import { faPlus, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bill-area',
  templateUrl: './bill-area.component.html',
  styleUrls: ['./bill-area.component.scss']
})
export class BillAreaComponent implements OnInit {
  iconPack = {
    plus: faPlus,
    delete: faTrash,
    cross: faTimes
  }
  constructor() { }

  ngOnInit() {
  }

}
