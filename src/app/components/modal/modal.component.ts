import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [animate(500, style({ opacity: 0 }))])
    ])
  ]
})
export class ModalComponent implements OnInit {
  @Input()
  state: boolean;

  @Output()
  changeState = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.changeState.emit(false);
  }
}
