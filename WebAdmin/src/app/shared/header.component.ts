import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private service: Service) { }

  fullname: string = '';
  apps: any;
  appId: any;

  ngOnInit() {
    this.fullname = this.service.getAuth().fullname;
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

  showAppName(os: string, version: string): string {
    return os + " | " + version;
  }
  onItemClick(app: any) {
    this.service.moveToAppDetail(app.app_id);
    this.appId = app.app_id;
  }

}
