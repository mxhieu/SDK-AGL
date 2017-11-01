import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  model: any;
  router: any;

  constructor(_router: Router) { 
    this.model = {};
    this.router = _router;
  }

  register(event) {
    this.router.navigate(['/dashboard']);
  }
}
