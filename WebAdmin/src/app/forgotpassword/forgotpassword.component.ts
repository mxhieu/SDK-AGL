import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';

@Component({
	selector: 'app-forgotpassword',
	templateUrl: './forgotpassword.component.html'
})
export class ForgotPasswordComponent implements OnInit {
	
	constructor(private service: BaseService) { }

	ngOnInit() {

	}
	
	clicked() {
		this.login();
	}
	login(){
		this.service.moveToLogin();
	}
}