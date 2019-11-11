import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-action',
  templateUrl: './table-action.component.html',
  styleUrls: ['./table-action.component.scss']
})
export class TableActionComponent implements OnInit {
  @Output() editHandler = new EventEmitter<boolean>();
  @Output() detailHandler = new EventEmitter<boolean>();
  @Output() deleteHandler = new EventEmitter<boolean>();
  @Input() buttons;
  iconPack = {
    edit: faEdit,
    detail: faEye,
    delete: faTrash
  }
  constructor() { }

  ngOnInit() {
  }
  editButtonHandler() {
    this.editHandler.emit(true)
  }
  detailButtonHandler() {
    this.detailHandler.emit(true)
  }
  deleteButtonHandler() {
    this.deleteHandler.emit(true)
  }
}
