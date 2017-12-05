import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service.config';
import { ConnectService } from '../../service.connect';
import { Router } from '@angular/router';

@Component({
	selector: 'app-app-setting',
	templateUrl: './app-setting.component.html',
	styleUrls: ['./app-setting.component.scss']
})
export class AppSettingComponent implements OnInit {

	appInfo: any;

	constructor(private router: Router,
		private config: ConfigService,
		private connect: ConnectService) { }

	ngOnInit() {
		this.refresh();
	}

	update(){
		this.connect.request('post', this.config.API_APP_EDIT, this.appInfo,
			data => {
				this.refresh();
			});
	}

	refresh(){
		if (this.config.isExpired()) 
			this.router.navigate([this.config.LINK_TO_LOGIN]);
		else
			this.appInfo = this.config.getAppInfo();
	}
}
