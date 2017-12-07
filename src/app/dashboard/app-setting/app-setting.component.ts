import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/service.config';
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
		private api: Service,
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
			this.api.moveToLogin();
		else {
			this.api.get(this.config.API_APP_DETAIL, {
				'id': this.config.getAppId()
			}, data => {
				this.appInfo = data;
			});
		}
	}
	resetKey() {
		this.api.get(this.config.API_APP_KEY_RESET, {
			'id': this.config.getAppId()
		}, data => {
			this.appInfo.key = data;
		});
	}
	update() {
		this.api.post(this.config.API_APP_EDIT, JSON.stringify(this.appInfo), {'id': this.config.getAppId()}, data => { });
	}
	delete() {
		this.api.get(this.config.API_APP_DELETE, {
			'id': this.config.getAppId()
		}, data => {
			this.api.moveToApps();
		});
	}
	onStatusChange() {
		this.appInfo.is_active = (this.appInfo.is_active == 1 ? 0 : 1);
		this.update();
	}

}
