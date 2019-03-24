import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'hfmh-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {
  path: string;

  constructor(private location: Location, private router: Router) {}

  hasPath(path: string): boolean {
    return this.path && this.path.indexOf(path) > -1;
  }

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.path = this.location.path();
      console.log(this.path);
    });
  }
}
