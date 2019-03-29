import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.css'],
  animations: [
    trigger('toggleMenu', [
      state(
        'inactive',
        style({
          left: '-150px'
        })
      ),
      state(
        'active',
        style({
          left: '0px',
          boxShadow: '5px 0px 1px 0px rgba(0, 0, 0, 0.4)'
        })
      ),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class NavMobileComponent implements OnInit {
  @Input()
  links;
  @Input()
  state;
  constructor() {}

  ngOnInit() {}
}
