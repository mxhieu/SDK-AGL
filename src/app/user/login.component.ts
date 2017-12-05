import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/Rx';

// In app component
import { ConfigService } from '../service.config';
import { ConnectService } from '../service.connect';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  model: any;
  router: any;
  login: any;
  config: any;
  connect: any;

  constructor(_router: Router, _connect: ConnectService, _config: ConfigService) {
    this.login = {};
    this.model = {};
    this.router = _router;
    this.config = _config;
    this.connect = _connect;
  }

  ngOnInit() {
    if (!this.config.isExpired()) {
      this.router.navigate([this.config.LINK_TO_APPS]);
    }
  }

  clicked(event) {
    this.connect.request('post', this.config.api_authorize, { 'username': this.model.username, 'password': this.model.password },
      data => {
        this.login = data;
        if (this.login.success == 1 && typeof (this.login.data.authorization) !== 'undefined') {
          this.config.setCookie(this.login.data.authorization);
          this.config.setFullname(this.login.data.fullname);
          this.router.navigate([this.config.LINK_TO_APPS]);
        }
      });
  }
}
