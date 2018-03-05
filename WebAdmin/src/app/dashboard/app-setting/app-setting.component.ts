import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/service.config';
import { Service } from '../../service/service';

@Component({
	selector: 'app-app-setting',
	templateUrl: './app-setting.component.html',
	providers: [Service],
	styleUrls: ['./app-setting.component.scss']
})
export class AppSettingComponent implements OnInit {

	appInfo: any;

	constructor(private api: Service, private config: ConfigService) {

		this.appInfo = {
			'settings': {},
			'version': 1.0,
			'icon': '',
			'logo':''
		};
	}

	ngOnInit() {
		this.refresh();
	}

	refresh() {
		if (!this.api.isExpired())
			this.api.get(this.config.API_APP_DETAIL, { 'id': this.config.getAppId() }, data => this.appInfo = data );
	}
	resetKey() {
		this.api.get(this.config.API_APP_KEY_RESET, { 'id': this.config.getAppId() }, data => this.appInfo.key = data );
	}
	update() {
		this.api.post(this.config.API_APP_EDIT, JSON.stringify(this.appInfo), { 'id': this.config.getAppId() }, data => this.refresh());
	}
	delete() {
		this.api.get(this.config.API_APP_DELETE, {'id': this.config.getAppId() }, data => this.api.moveToApps());
	}
	onStatusChange() {
		this.appInfo.is_active = (this.appInfo.is_active == 1 ? 0 : 1);
		this.update();
	}
	getUrl(icon: string) : string{
		return this.api.getUrl(icon);
	}
	fileChanged(event, type: number) {
		let fileList: FileList = event.target.files;
		if(fileList.length > 0) {
        	let file: File = fileList[0];
			this.api.upload(file, data => {
				if(type == 0)
					this.appInfo.icon = data;
				else
					this.appInfo.logo = data;
			});
		}
	}
}
