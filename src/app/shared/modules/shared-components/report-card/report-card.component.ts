import { Component, OnInit, Input } from '@angular/core';
import { faBoxes, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {
  @Input() reportCardData: any;
  iconPack = {
    arrow: faLongArrowAltRight
  }
  constructor() { }

  ngOnInit() {
  }

}
