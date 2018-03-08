import { Component } from '@angular/core';
import { BaseService } from '../service/base.service';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  model: any;

  constructor(private service: BaseService) {
    this.model = {};
  }
  ngOnInit() {

  }
  register(event) {
    this.service.register({
      'username': this.model.username,
      'password': this.model.password,
      'fullname': this.model.username,
      'email': this.model.email
    }, data => {
      if (data.success == 1) {
        this.service.moveToLogin();
      }
    });
  }
}