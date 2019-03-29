import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import { UserFormAnimationService } from '../../services/userform-animation';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  @ViewChild('overlay')
  overlay: ElementRef;

  @HostListener('window:click', ['$event'])
  onclick(e) {
    if (
      e.path.includes(this.overlay.nativeElement) &&
      this.userFormAnimation.active.getValue()
    ) {
      this.userFormAnimation.toggle(this.userFormAnimation.active.getValue());
    }
  }

  constructor(private userFormAnimation: UserFormAnimationService) {}

  ngOnInit() {}
}
