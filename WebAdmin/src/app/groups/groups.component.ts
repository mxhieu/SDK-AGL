import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service';

@Component({
	selector: 'app-groups',
	templateUrl: './groups.component.html',
	styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

	isHidden: boolean; groups: any[]; onerow: any; data: any;
	paging: any; isnext: any; header: any; search: any;

	fullname: string = '';

	constructor(private service: Service) {
		this.isnext = true;
		this.search = { field: 'name', term: '' };
		this.paging = { pg_page: 1, pg_size: 10, st_col: 'name', st_type: -1 };
		this.header = [
			{ id: 'icon', name: 'Icon', is_search: 0, st_col: 'icon', st_type: 0 },
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 },
			{ id: 'action', name: 'Action', is_search: 0, st_col: 'action', st_type: 0 },
		];
	}

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
			this.getGroups();
			this.fullname = this.service.getAuth().fullname;
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
			'_id': '',
			'name': 'group' + new Date().getMilliseconds(),
			'is_active': 1,
			'icon': 'icon' + new Date().getMilliseconds(),
		};
		this.groups = [];
	}
	delete(e: any, id: any) {
		e.stopPropagation();
		this.service.deleteGroup({ 'id': id }, data => { this.refresh() });
	}
	jumpPage(_page) {
		_page = (_page <= 0) ? 1 : _page;
		this.paging.pg_page = _page
		this.getGroups();
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
	newApp() {
		this.service.newApp(this.onerow, data => { this.refresh(); });
	}

	getUrl(icon: string): string {
		return this.service.getUrl(icon);
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