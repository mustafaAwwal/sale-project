import { Component, OnInit } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-parent-nav',
  templateUrl: './parent-nav.component.html',
  styleUrls: ['./parent-nav.component.scss']
})
export class ParentNavComponent implements OnInit {
  iconPack = {
    bars: faBars
  }
  constructor() { }

  ngOnInit() {
  }

}
