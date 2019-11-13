import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-heading',
  templateUrl: './form-heading.component.html',
  styleUrls: ['./form-heading.component.scss']
})
export class FormHeadingComponent implements OnInit {
  @Input() incomingHeading: any;
  constructor() { }

  ngOnInit() {
  }

}
