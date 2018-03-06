import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private service: GroupService) { }

  fullname: string = '';
  apps: any;
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
    this.apps = this.service.getGroupSetting();
  }

  onItemClick(app: any) {
    this.service.moveToAppDetail(app.app_id);
    this.appId = app.app_id;
  }

}
