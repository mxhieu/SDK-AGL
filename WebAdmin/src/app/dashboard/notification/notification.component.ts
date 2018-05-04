import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../service/notification.service';
import { GroupService } from '../../service/group.service';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {

	msgs: any[]; header = []; onerow: any; paging: any;
	isHidden: boolean;

	constructor(private service: NotificationService, private gService: GroupService) {

		this.header = [
			{ id: 'title', name: 'Title', is_search: 1, st_col: 'title', st_type: 1 },
			{ id: 'body', name: 'Body', is_search: 1, st_col: 'body', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 },
			{ id: 'status', name: 'Status', is_search: 1, st_col: 'status', st_type: 1 }];

	}
	ngOnInit() {
		this.refresh();
	}
	refresh() {
		if (!this.service.isExpired()) {
			this.reset();
			this.syncData();
			
		}
	}
	send() {
		this.onerow.app_group_id = this.service.getGroupId();
		this.service.sendMessage(this.onerow, data => {this.refresh();})
	}
	
	cancel() {
		this.refresh();
	}
	
	sort($event) {
		var target = $event.target || $event.srcElement || $event.currentTarget;
		var idAttr = target.attributes.rxdata;
		if (typeof (idAttr) != 'undefined') {
			var tempcol = idAttr.nodeValue;
			if (this.paging.st_col == tempcol) {
				this.paging.st_type *= -1;
			} else {
				this.paging.st_col = tempcol;
				this.paging.st_type = -1;
			}
			this.syncData();
		}
	}


	jumpPage(_page) {
		_page = (_page <= 0) ? 1 : _page;
		this.paging.pg_page = _page
		this.syncData();
	}

	resizePage($event) {
		this.paging.pg_size = $event;
		this.jumpPage(1);
	}
	reset() {
		this.isHidden = true;
		this.onerow = {
			'message': 'New message',
			'status': 0,
			'open': '0',
			'target': '1000',
			'app_id': '',
			'is_active': 1,
			'created_at': '0'
		};
		this.msgs = [];
		this.paging = { pg_page: 1, pg_size: 100 };
	}

	syncData() {
		this.service.getNotifications({
			'search_app_group_id': this.service.getGroupId(),
			'pg_page': this.paging.pg_page,
			'pg_size': this.paging.pg_size,
			'st_col': this.paging.st_col,
			'st_type': this.paging.st_type,
		}, data => {
			this.msgs = data;
		});

	}
	toggle() {
		this.isHidden = !this.isHidden;
	}
}