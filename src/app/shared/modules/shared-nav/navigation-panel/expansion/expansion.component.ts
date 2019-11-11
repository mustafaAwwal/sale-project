import { Component, OnInit, Input } from '@angular/core';
import { faShoppingCart, faDollarSign, faBoxes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent implements OnInit {
  @Input() routePack: any;
 
  constructor() { }

  ngOnInit() {
  }

}
