import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  model: any;

  constructor(private service: BaseService) {
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
