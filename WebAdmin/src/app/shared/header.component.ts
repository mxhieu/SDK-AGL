import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private service: BaseService) { }

  fullname: string = '';
  
  appId: any;

  ngOnInit() {
    this.fullname = this.service.getFullName();
    this.getApps();
  }
  forgotPassword() {
    this.service.moveToForgotPassword();
  }
  logout() {
    this.service.logout();
  }
  getApps() {
    this.appId = this.service.getAppId();
  }

  onItemClick(app: any) {
    this.service.moveToAppDetail(app.app_id);
    this.appId = app.app_id;
  }

}
