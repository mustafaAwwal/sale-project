import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  iconPack = {
    bars: faBars
  }
  @Output() sideNavToggler = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit() {
  }
  sideNavTogglerFunction() {
    this.sideNavToggler.emit(true)
  }
}
