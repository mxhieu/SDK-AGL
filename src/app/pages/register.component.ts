import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../service.config';
import { ConnectService } from '../service.connect';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  model: any;
  router: any;
  config: any;
  connect: any;

  constructor(_router: Router, _config: ConfigService, _connect: ConnectService) { 
    this.model = {};
    this.router = _router;
    this.config = _config;
    this.connect = _connect;
  }
 ngOnInit(): void {
    if (!this.config.isExpired())
      this.router.navigate([this.config.lik_dashboard_app]);
  }
  register(event) {
    this.connect.request('post', this.config.api_user_register, 
      { 
        'username': this.model.username, 
        'password': this.model.password,
        'fullname': this.model.username,
        'email': this.model.email
      },
      data => {
        if (data.success == 1) {
          this.router.navigate([this.config.route_login]);
        }
      });
  }
}