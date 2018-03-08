import { Component, OnInit } from '@angular/core';
import { GroupService } from '../service/group.service';
import { BaseComponent } from '../service/base.component';

@Component({
	selector: 'app-groups',
	templateUrl: './group.component.html',
	styleUrls: ['./group.component.scss']
})

export class GroupComponent extends BaseComponent implements OnInit {

	groups: any[]; onerow: any; data: any;
	paging: any; isnext: any; header: any; search: any;

	fullname: string = '';

	// App
	isAppHidden: boolean = true;

	// Group
	isGroupHidden: boolean = true; 
	isGroupEdit: boolean = false;

	app: any;

	constructor(private service: GroupService) {
		
		super();

		this.isnext = true;
		this.search = { field: 'name', term: '' };
		this.paging = { pg_page: 1, pg_size: 10, st_col: 'name', st_type: -1 };
		this.header = [
			{ id: 'icon', name: '#', is_search: 0, st_col: 'icon', st_type: 0 },
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 },
			{ id: 'updated_at', name: 'Updated', is_search: 1, st_col: 'updated_at', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }
			
		];
	}

	ngOnInit() {
		this.refresh();
	}
	
	/** Group function. */
	toggleGroup() {
		this.isGroupHidden = !this.isGroupHidden;
	}
	
	newGroup() {
		this.service.newGroup(this.onerow, data => { this.refresh(); });
	}
	getGroups() {
		this.service.getGroups({
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			['search_' + this.search.field]: this.search.term
		}, data => {
			this.groups = data;
		});
	}
	editGroup(e: any, item: any) {
		e.stopPropagation();
		this.onerow = item;
		this.isGroupHidden = false;
		this.isGroupEdit = true;
	}
	
	updateGroup(){
		this.service.updateGroup(this.onerow, data => { this.refresh(); });
	}

	deleteGroup(e: any, id: any) {
		e.stopPropagation();
		this.service.deleteGroup({ 'id': id }, data => { this.refresh() });
	}
	/** App function. */
	toggleApp(e: any, item: any) {
		e.stopPropagation();
		this.onerow = item;
		this.isAppHidden = !this.isAppHidden;
	}

	newApp() {
		this.app.group_id = this.onerow._id;
		this.service.newApp(this.app, data => { this.refresh(); });
	}

	refresh() {
		if (!this.service.isExpired()) {
			this.reset();
			this.getGroups();
			this.fullname = this.service.getFullName();
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
			this.getGroups();
		}
	}
	
	resizePage($event) {
		this.paging.pg_size = $event;
		this.jumpPage(1);
	}

	reset() {
		// Group
		this.isGroupHidden = true;
		this.isGroupEdit = false;
		this.onerow = {
			'_id': '',
			'name': 'group' + new Date().getMilliseconds(),
			'is_active': 1,
			'icon': 'icon' + new Date().getMilliseconds(),
		};
		this.groups = [];

		// Apps
		this.isAppHidden = true;
		this.app = {
			'platform': 'android',
			'name': 'app' + new Date().getMilliseconds(),
			'bundle_id': 'com.coresdk.sampleapp',
			'icon': ''
		};
	}
	
	jumpPage(_page) {
		_page = (_page <= 0) ? 1 : _page;
		this.paging.pg_page = _page
		this.getGroups();
	}
	
	forgotPassword() {
		this.service.moveToForgotPassword();
	}

	logout() {
		this.service.logout();
	}
	onItemClick(group: any) {
		var st = group.settings;
		if (st) {
			var app = st[0];
			if (app) {
				this.service.saveGroupSetting(st);
				this.service.moveToAppDetail(app.app_id);
			}
		}
	}

}