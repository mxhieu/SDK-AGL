import { Component, OnInit } from '@angular/core';
import { GroupService } from '../service/group.service';
import { BaseComponent } from '../service/base.component';

@Component({
	selector: 'app-apps',
	templateUrl: './apps.component.html',
	styleUrls: ['./apps.component.scss']
})
export class AppsComponent extends BaseComponent implements OnInit {

	isHidden: boolean;

	apps: any[];
	onerow: any;

	data: any; paging: any; isnext: any; header: any; search: any;
	
	constructor(private service: GroupService) {
		super();
		this.isnext = true;
		this.search = { field: 'name', term: '' };
		this.paging = { pg_page: 1, pg_size: 10, st_col: 'name', st_type: -1 };
		this.header = [
			/*{ id: '_id', name: 'ID', is_search: 1, st_col: '_id', st_type: 1 },*/
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'bundle_id', name: 'BundleId', is_search: 1, st_col: 'bundle_id', st_type: 1 },
			{ id: 'version', name: 'Version', is_search: 1, st_col: 'version', st_type: 1 },
			{ id: 'platform', name: 'Platform', is_search: 1, st_col: 'platform', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 }
		];
	}

	ngOnInit() {
		this.refresh();
	}

	toggle() {
		this.isHidden = !this.isHidden;
	}

	refresh() {
		if (!this.service.isExpired()) {
			this.reset();
			this.getApps();
		}
	}

	sort($event) {
		var target = $event.target || $event.srcElement || $event.currentTarget;
		var idAttr = target.attributes.rxdata;
		if (typeof (idAttr) != 'undefined') {
			var tempcol = idAttr.nodeValue;
			if (this.paging.st_col == tempcol)
				this.paging.st_type *= -1;
			else {
				this.paging.st_col = tempcol;
				this.paging.st_type = -1;
			}
			this.getApps();
		}
	}
	cancel() {
		this.refresh();
	}
	
	resizePage($event) {
		this.paging.pg_size = $event;
		this.jumpPage(1);
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

	jumpPage(_page) {
		_page = (_page <= 0) ? 1 : _page;
		this.paging.pg_page = _page
		this.getApps();
	}
	newApp() {
		this.service.newApp(this.onerow, data => { this.refresh(); });
	}
	getApps() {
		this.service.getApps({
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			['search_' + this.search.field]: this.search.term
		}, data => {
			this.apps = data;
		});
	}
	onItemClick(app: any) {
		this.service.moveToAppDetail(app._id);
	}
}