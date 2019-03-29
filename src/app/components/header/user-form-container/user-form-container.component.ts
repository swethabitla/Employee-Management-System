import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { UserFormAnimationService } from '../../../services/userform-animation';

const animationTime = 400;

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate(
          `${animationTime}ms ease-in`,
          style({ transform: 'translateY(0%)' })
        )
      ]),
      transition(':leave', [
        animate(
          `${animationTime}ms ease-in`,
          style({ transform: 'translateY(-100%)' })
        )
      ])
    ])
  ]
})
export class UserFormContainerComponent implements OnInit {
  name: string;
  state = false;
  @Input()
  type;
  constructor(private animationService: UserFormAnimationService) {}

  ngOnInit() {
    this.animationService
      .getState(this.type)
      .subscribe(newState => (this.state = newState));
    this.animationService.setAnimationTime(animationTime);
  }
}
