import { Component, OnInit, Input } from '@angular/core';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() itemPack: any;
  constructor() { }

  ngOnInit() {
  }

}
