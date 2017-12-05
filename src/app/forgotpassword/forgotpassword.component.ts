import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service.config';
import { ConnectService } from '../service.connect';
import { Router } from '@angular/router';

@Component({
	selector: 'app-forgotpassword',
	templateUrl: './forgotpassword.component.html'
})
export class ForgotPasswordComponent implements OnInit {
	
	constructor(private router: Router,
		private config: ConfigService,
		private connect: ConnectService) { }

	ngOnInit() {

	}
	clicked() {
		this.router.navigate([this.config.LINK_TO_LOGIN]);
	}
	login(){
		this.router.navigate([this.config.LINK_TO_LOGIN]);	
	}
}