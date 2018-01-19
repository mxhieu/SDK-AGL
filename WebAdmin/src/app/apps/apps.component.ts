import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';

@Component({
	selector: 'app-apps',
	templateUrl: './apps.component.html'
})
export class AppsComponent implements OnInit {

	isHidden: boolean;

	apps: any[];
	onerow: any;

	constructor(private service: Service) { }

	ngOnInit() {
		this.refresh();
	}

	toggle() {
		this.isHidden = !this.isHidden;
	}

	refresh() {
		if (this.service.isExpired()) {
			this.service.moveToLogin();
		} else {
			this.reset();
			this.getApps();
		}
	}
	cancel() {
		this.refresh();
	}
	reset() {
		this.isHidden = true;
		this.onerow = {
			'platform': 'android',
			'name': 'app' + new Date().getMilliseconds(),
			'bundle_id': 'com.coresdk.sampleapp',
			'icon': ''
		};
		this.apps = [];
	}
	newApp() {
		this.service.newApp(this.onerow, data => { this.refresh(); });
	}
	getApps() {
		this.service.getApps({
			'pg_page' : 1,
			'pg_size': 100
		}, data => {
			this.apps = Array.isArray(data) ? data : [];
		});
	}
	getUrl(icon: string) : string{
		return this.service.getUrl(icon);
	}
	onItemClick(app: any) {
		this.service.moveToAppDetail(app._id);
	}
}