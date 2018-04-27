import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../service/payment.service';
import { BaseComponent } from '../../service/base.component';
import { GroupService } from '../../service/group.service';

@Component({
	selector: 'app-inapp',
	templateUrl: './in-app.component.html',
	styleUrls: ['./in-app.component.scss']
})

export class InAppComponent extends BaseComponent implements OnInit {

	items: any[]; cardItems: any[]; onerow: any; isHidden: boolean; paging: any; isEdit: boolean; isnext: any;
	apps: any; app = { 'app_id': '', 'os': '', 'version': '' }; header: any; search: any;

	constructor(private service: PaymentService, private gService: GroupService) {
		super();
		this.search = { field: 'created_at', term: '' };
		this.isnext = true;
		this.paging = this.service.defaultPaging('created_at');
		this.header = [
			{ id: 'id', name: 'Store Id', is_search: 1, st_col: 'id', st_type: 1 },
			{ id: 'name', name: 'Name', is_search: 1, st_col: 'name', st_type: 1 },
			{ id: 'game_diamond', name: 'Diamond', is_search: 1, st_col: 'game_diamond', st_type: 1 },
			{ id: 'desc', name: 'Description', is_search: 1, st_col: 'desc', st_type: 1 },
			{ id: 'price', name: 'Price (USD)', is_search: 1, st_col: 'price', st_type: 1 },
			{ id: 'image', name: 'Image', is_search: -1, st_col: 'image', st_type: 1 },
			{ id: 'is_active', name: 'Status', is_search: 1, st_col: 'is_active', st_type: 1 },
			{ id: 'created_at', name: 'Created', is_search: 1, st_col: 'created_at', st_type: 1 }];
	}

	ngOnInit() { this.refresh(); }

	refresh() {
		if (!this.service.isExpired()) {
			this.reset();
			this.service.getPayments({
				'search_app_id': this.service.getAppId(),
				'st_col': this.paging.st_col,
				'st_type': this.paging.st_type
			}, data => { this.items = data; });
			this.getApps();
		}
	}

	getApps() {
		this.app.app_id = this.service.getAppId();
		this.apps = this.gService.getGroupSetting();
		for (var ap of this.apps) {
			if (ap.app_id == this.app.app_id) {
				this.app.os = ap.os;
				this.app.version = ap.version;
			}
		}
	}
	switchApp(app) {
		this.service.setAppId(app.app_id);
		this.refresh();
	}
	jumpPage(_page) {
		_page = (_page <= 0) ? 1 : _page;
		this.paging.pg_page = _page
		this.refresh();
	}

	resizePage($event) {
		this.paging.pg_size = $event;
		this.jumpPage(1);
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
			this.refresh();
		}
	}
	fileChange(event) {
		let fileList: FileList = event.target.files;
		if (fileList.length > 0) {
			let file: File = fileList[0];
			this.service.upload(file, data => {
				this.onerow.icon = data;
			});
		}
	}
	cancel() {
		this.refresh();
	}
	onRowClick(item) {
		this.onerow = item;
		this.isHidden = false;
		this.isEdit = true;
	}
	update() {
		this.service.update(this.onerow, data => { this.refresh(); });
	}
	save() {
		this.service.insert(this.onerow, data => { this.refresh(); });
	}
	delete() {
		this.service.delete(this.onerow, data => { this.refresh(); });
	}

	reset() {
		this.isEdit = false;
		this.isHidden = true;
		this.onerow = {
			'price': 1000,
			'name': 'items' + new Date().getMilliseconds(),
			'desc': 'New in-app items',
			'icon': '',
			'app_id': this.service.getAppId(),
			'is_active': 1
		};
		this.items = [];
	}
	toggle() {
		this.isHidden = !this.isHidden;
		this.isEdit = false;
	}
}
