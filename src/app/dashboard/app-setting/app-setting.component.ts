import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service.config';
import { ConnectService } from '../../service.connect';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers, URLSearchParams, Request, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs";

import { Service } from '../../service/service';

@Component({
	selector: 'app-app-setting',
	templateUrl: './app-setting.component.html',
	providers: [Service],
	styleUrls: ['./app-setting.component.scss']
})
export class AppSettingComponent implements OnInit {

	appInfo: any;

	constructor(
		private http: Http,
		private api: Service,
		private router: Router,
		private config: ConfigService) {

		this.appInfo = {
			'settings': {}
		};
	}

	ngOnInit() {
		this.refresh();
	}

	refresh() {
		if (this.api.isExpired())
			this.router.navigate([this.config.LINK_TO_LOGIN]);
		else {
			let params = new URLSearchParams();
			params.append('id', this.config.getAppId());
			this.api.get(this.config.API_APP_DETAIL, params,
				data => {
					this.appInfo = data;
				});
		}
	}
	resetKey(){
		let params = new URLSearchParams();
		params.append('id', this.config.getAppId());
		this.api.get(this.config.API_APP_KEY_RESET, params,
			data => {
				this.appInfo.key=  data;
			});
	}
	update() {
		let params = new URLSearchParams();
		params.append('id', this.config.getAppId());
		this.api.post(this.config.API_APP_EDIT, JSON.stringify(this.appInfo), params,
			data => {
				
			});
	}
	delete() {
		let params = new URLSearchParams();
		params.append('id', this.config.getAppId());
		this.api.get(this.config.API_APP_DELETE, params,
			data => {
				this.router.navigate([this.config.LINK_TO_APPS]);
			});
	}
	onStatusChange() {
		this.appInfo.is_active = (this.appInfo.is_active == 1 ? 0 : 1);
		this.update();
	}

}
