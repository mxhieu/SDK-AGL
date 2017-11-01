import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Http, URLSearchParams } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
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

  ngOnInit() {}
  
  doLogin() {    
  }

  clicked(event, _http: Http) {
    this.connect.request('post', this.config.api_authorize, {'username': this.model.username, 'password': this.model.password}, 
    data => {      
      this.login = data;
      if (this.login.success == 1 && typeof(this.login.data.authorization) !== 'undefined') {          
        Cookie.set(this.config.app_token, this.login.data.authorization);
        this.router.navigate([this.config.lik_dashboard_index]);
      }      
    });
  }
}
