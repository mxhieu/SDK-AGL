import { Component, OnInit } from '@angular/core';
import { URLSearchParams } from "@angular/http";
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
			'bundle_id': 'com.coresdk.sampleapp'
		};
		this.apps = [];
	}
	newApp() {
		this.service.newApp(this.onerow, data => { this.refresh(); });
	}
	getApps() {
		let params = new URLSearchParams();
		params.append('pg_page', '1');
		params.append('pg_size', '100');
		this.service.getApps(params, data => {
			this.apps = Array.isArray(data) ? data : [];
		});
	}
	onItemClick(app: any) {
		this.service.moveToAppDetail(app._id);
	}
}