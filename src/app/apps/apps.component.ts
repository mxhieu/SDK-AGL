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

	constructor(
		private config: ConfigService,
		private router: Router,
		private connect: ConnectService) { }

	ngOnInit() {
		this.reset();
		this.getAppByUser();
	}

	public logout() {

	}

	toggle() {
		this.isHidden = !this.isHidden;
	}

	reset() {
		this.isHidden = true;
		this.onerow = { 'platform': 'android' };
	}
	save() {
		this.reset();
	}
	getAppByUser() {
		this.connect.request('get', this.config.api_app_get, null,
			data => {
				this.apps = Array.isArray(data.data) ? data.data : [];
				console.log(this.apps);
			});
	}
	onRowClick(){
		this.router.navigate([this.config.LINK_TO_APPS_OVERVIEW]); 
	}
}