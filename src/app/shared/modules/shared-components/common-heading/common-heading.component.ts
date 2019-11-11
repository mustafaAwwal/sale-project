import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-heading',
  templateUrl: './common-heading.component.html',
  styleUrls: ['./common-heading.component.scss']
})
export class CommonHeadingComponent implements OnInit {
  @Input() incomingHeading: any;
  constructor() { }

  ngOnInit() {
  }

}
