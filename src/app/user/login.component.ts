import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/Rx';

// In app component
import { ConfigService } from '../service.config';
import { ConnectService } from '../service.connect';

import { Service } from '../service/service';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  model: any;

  constructor(private service: Service) {
    this.model = {};
  }

  ngOnInit() {
    if (!this.service.isExpired()) {
      this.service.moveToApps();
    }
  }

  clicked() {
    let params = new URLSearchParams();
    params.append('username', this.model.username);
    params.append('password', this.model.password);
    this.service.login(params);
  }
}
