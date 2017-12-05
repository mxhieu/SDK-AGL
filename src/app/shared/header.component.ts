import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    private config: ConfigService,
    private router: Router) { }

  ngOnInit() {

  }

  getFullName(): string {
    return this.config.getFullName();
  }
  forgotPassword() {
    this.router.navigate([this.config.LINK_TO_FORGOT_PASSWORD]);
  }
  logout() {
    this.config.logout();
    this.router.navigate([this.config.LINK_TO_LOGIN]);
  }
}
