import { Component, OnInit, Input } from '@angular/core';
import { faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav-link',
  templateUrl: './side-nav-link.component.html',
  styleUrls: ['./side-nav-link.component.scss']
})
export class SideNavLinkComponent implements OnInit {
  @Input() routerInput:any;
  constructor() { }

  ngOnInit() {
  }

}
