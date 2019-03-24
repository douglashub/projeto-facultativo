import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'hfmh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
