import { Component, OnInit } from '@angular/core';
import { RouterAnimation } from '../../animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-secondary-outlet',
  templateUrl: './secondary-outlet.component.html',
  styleUrls: ['./secondary-outlet.component.scss'],
  animations: [
    RouterAnimation
  ]
})
export class SecondaryOutletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  preparedRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRoute && outlet.activatedRouteData['animation']
  }
}
