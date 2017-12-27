import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';

@Component({
	selector: 'app-forgotpassword',
	templateUrl: './forgotpassword.component.html'
})
export class ForgotPasswordComponent implements OnInit {
	
	constructor(private service: Service) { }

	ngOnInit() {

	}
	clicked() {
		this.login();
	}
	login(){
		this.service.moveToLogin();
	}
}