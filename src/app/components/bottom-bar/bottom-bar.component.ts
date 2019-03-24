import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'hfmh-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  backButton(): void {
    this.location.back();
  }
}
