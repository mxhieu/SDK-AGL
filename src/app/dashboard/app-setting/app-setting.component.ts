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

	appInfo: {};
	appId : string;

	constructor(private router: Router,
		private config: ConfigService,
		private connect: ConnectService) { }

	ngOnInit() {
		this.appId = this.config.getAppInfo()._id;
		this.refresh();
	}

	update() {
		this.connect.request('post', this.config.API_APP_EDIT, this.appInfo,
			data => {
				this.getAppData();
			});
	}

	refresh() {
		if (this.config.isExpired())
			this.router.navigate([this.config.LINK_TO_LOGIN]);
		else
			this.appInfo = this.config.getAppInfo();
	}

	getAppData() {
		var params = { 'id': this.appId };
		this.connect.request('get', this.config.API_APP_DETAIL, params,
			data => {
				this.config.setAppInfo(data);
				this.appInfo = data.data;
			});
	}
}
