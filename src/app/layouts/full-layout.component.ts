import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../service.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  router: any;
  config: any;
  fullname : string;
  appInfo: any;

  constructor(_router: Router, _config: ConfigService) { 
    this.router = _router;
    this.config = _config;    
  }

  ngOnInit(): void {
    this.fullname = this.config.getFullName();
    console.log('Full');
    this.appInfo = this.config.getAppInfo();
  }  
 

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};  

  public toggled(open:boolean):void {
    
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  logout(){
    this.config.logout();
    this.router.navigate([this.config.LINK_TO_LOGIN]); 
  }
}
