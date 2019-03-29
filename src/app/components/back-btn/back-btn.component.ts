import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.css']
})
export class BackBtnComponent implements OnInit {
  url: string;
  constructor(private location: Location) {}

  ngOnInit() {}

  onClick(): void {
    this.location.back();
  }
}
