import { Component } from '@angular/core';
import { Service } from '../service/service';
import { ConfigService } from '../service/service.config';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  model: any;

  constructor(private service: Service, private config: ConfigService) {
    this.model = {};

  }
  ngOnInit(): void {
    
  }
  register(event) {
    this.service.post(this.config.api_user_register,
      {
        'username': this.model.username,
        'password': this.model.password,
        'fullname': this.model.username,
        'email': this.model.email
      }, null, data => {
        if (data.success == 1) {
          this.service.moveToLogin();
        }
      });
  }
}