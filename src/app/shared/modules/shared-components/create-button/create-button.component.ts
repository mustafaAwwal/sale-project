import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent implements OnInit {
  @Input() incomingText: any;
  @Output() createHandler = new EventEmitter<boolean>();
  buttonText: any;
  iconPack = {
    plus: faPlus
  }
  constructor() { }

  ngOnInit() {
    this.buttonText = this.incomingText;
  }
  createHandlerFunction() {
    this.createHandler.emit(true)
  }
}
