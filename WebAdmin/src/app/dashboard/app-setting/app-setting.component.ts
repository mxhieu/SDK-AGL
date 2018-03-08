import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
import { BaseComponent } from '../../service/base.component';

@Component({
	selector: 'app-app-setting',
	templateUrl: './app-setting.component.html',
	styleUrls: ['./app-setting.component.scss']
})
export class AppSettingComponent extends BaseComponent implements OnInit {

	appInfo: any;

	constructor(private service: AppService) {

		super();
		
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
		if (!this.service.isExpired())
			this.service.detail({ 'id': this.service.getAppId() }, data => this.appInfo = data );
	}
	resetKey() {
		this.service.resetKey({ 'id': this.service.getAppId() }, data => this.appInfo.key = data );
	}
	update() {
		this.service.update(JSON.stringify(this.appInfo), { 'id': this.service.getAppId() }, data => this.refresh());
	}
	delete() {
		this.service.delete({'id': this.service.getAppId() }, data => this.service.moveToApps());
	}
	onStatusChange() {
		this.appInfo.is_active = (this.appInfo.is_active == 1 ? 0 : 1);
		this.update();
	}
	
	fileChanged(event, type: number) {
		let fileList: FileList = event.target.files;
		if(fileList.length > 0) {
        	let file: File = fileList[0];
			this.service.upload(file, data => {
				if(type == 0)
					this.appInfo.icon = data;
				else
					this.appInfo.logo = data;
			});
		}
	}
}
