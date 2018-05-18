import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';

@Component({
  selector: 'app-rbac',
  templateUrl: './rbac-layout.component.html'
})
export class RbacLayoutComponent implements OnInit {

  disabled: boolean = false;
  status: { isopen: boolean } = { isopen: false };

  fullname: string = '';

  constructor(private service: BaseService) {
    
  }

  ngOnInit(): void {
    if (!this.service.isExpired()) {
      this.fullname = this.service.getFullName();
    }
  }

  toggled(open: boolean): void {

  }
  forgotPassword() {
    this.service.moveToForgotPassword();
  }
  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  logout() {
    this.service.logout();
  }
}
