import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../service.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  appInfo: any;
  disabled: boolean = false;
  status: { isopen: boolean } = { isopen: false };

  constructor(private router: Router, private config: ConfigService) {
    this.appInfo = {};
  }

  ngOnInit(): void {
    if (this.config.isExpired()) {
      this.router.navigate([this.config.LINK_TO_LOGIN]);
    }
    else {
      this.appInfo = this.config.getAppInfo();
    }
  }

  getFullName(): string {
    return this.config.getFullName();
  }



  toggled(open: boolean): void {

  }
  forgotPassword() {
    this.router.navigate([this.config.LINK_TO_FORGOT_PASSWORD]);
  }
  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  logout() {
    this.config.logout();
    this.router.navigate([this.config.LINK_TO_LOGIN]);
  }
}
