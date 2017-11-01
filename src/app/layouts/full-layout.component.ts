import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  router: any;
  
  constructor(_router: Router) { 
    this.router = _router;
  }

  login(event) {
    this.router.navigate(['/pages/login']); 
  }

  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};  

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}  
}
