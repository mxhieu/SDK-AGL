import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
  				private config: ConfigService, 
  				private router: Router) { }

  ngOnInit() {

  }

  getFullName():string{
	return this.config.getFullName();
  }

  logout(){
    this.config.logout();
    this.router.navigate([this.config.LINK_TO_LOGIN]); 
  }
}
