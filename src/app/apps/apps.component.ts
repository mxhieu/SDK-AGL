import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service.config';
import { ConnectService } from '../service.connect';
import { Router } from '@angular/router';

@Component({
	selector: 'app-apps',
	templateUrl: './apps.component.html',
	styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

	isHidden: boolean;

	apps: any;
	onerow: any;
	paging: any;

	constructor(
		private router: Router,
		private config: ConfigService,
		private connect: ConnectService) { }

	ngOnInit() {
		this.reset();
		this.getAppByUser();
	}

	toggle() {
		this.isHidden = !this.isHidden;
	}

	reset() {
		this.isHidden = true;
		this.onerow = {
			'platform': 'android',
			'name': 'app' + new Date().getMilliseconds(),
			'bundle_id': 'com.coresdk.sampleapp'
		};
		this.paging = { pg_page: 1, pg_size: 100};
	}
	save() {
		this.connect.request('post', this.config.api_app_add, this.onerow,
			data => { if (data.success == 1) { this.getAppByUser(); this.reset(); } })
	}
	getAppByUser() {
		var params = {}; Object.assign(params, this.paging);
		this.connect.request('get', this.config.api_app_get, params,
			data => {
				this.apps = Array.isArray(data.data) ? data.data : [];
				console.log(this.apps);
			});
	}
	onRowClick() {
		this.router.navigate([this.config.LINK_TO_APPS_OVERVIEW]);
	}
}