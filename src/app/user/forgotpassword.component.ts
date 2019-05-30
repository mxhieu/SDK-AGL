import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';
import { BaseComponent } from '../service/base.component';
import { ConfigService } from '../service/service.config';

@Component({
	selector: 'app-forgotpassword',
	templateUrl: './forgotpassword.component.html'
})
export class ForgotPasswordComponent extends BaseComponent implements OnInit {
	model: any;
	checksuccess: any;
	constructor(private service: BaseService) {
		super();
		this.model = {};
		this.checksuccess = false
	}

	ngOnInit() {

	}
	keyDownFunction(event) {
	    if (event.keyCode == 13) {
	      this.clicked();
	    }
	  }
	
	clicked() {
		this.service.changpass({
			'currentpassword': this.model.currentpassword,
			'newpassword': this.model.newpassword,
			'confirmnewpassword': this.model.confirmnewpassword
	    }, () => {
	    	this.checksuccess = true
	    });
	}
}