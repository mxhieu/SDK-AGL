import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/Rx';

// In app component
import { ConfigService } from '../service/service.config';
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
    this.service.login({
      'username': this.model.username,
      'password': this.model.password
    });
  }
}
