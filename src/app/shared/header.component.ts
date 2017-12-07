import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private serice: Service) { }

  fullname: string = '';

  ngOnInit() {
    this.fullname = this.serice.getAuth().fullname;
  }
  forgotPassword() {
    this.serice.moveToForgotPassword();
  }
  logout() {
    this.serice.logout();
  }
}
